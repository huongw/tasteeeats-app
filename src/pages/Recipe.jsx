import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    axios
      .get(
        `/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("recipe", JSON.stringify(res.data));
        setRecipe(res.data);
      });
  }, [params.id]);

  return (
    <Wrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Card>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>
        <Info>
          {active === "instructions" && (
            <>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
            </>
          )}
          {active === "ingredients" && (
            <ul>
              {recipe.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          )}
        </Info>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 600px;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

const Card = styled.div`
  width: 50%;
`;

const Info = styled.div`
  margin-top: 2rem;

  p {
    margin: 1rem 0;
  }

  ol {
    padding-left: 1.5rem;
  }

  li {
    margin: .5rem 0;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`;

export default Recipe;
