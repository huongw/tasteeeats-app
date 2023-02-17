import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Loader } from "./index";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("instructions");
  const [isLoading, setIsLoading] = useState(true);

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
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading && <Loader />}
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Card>
        {Object.keys(recipe).length !== 0 && (
          <div>
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
          </div>
        )}
        <Info>
          {active === "instructions" && (
            <>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <div
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></div>
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
    </MotionDiv>
  );
}

const MotionDiv = styled(motion.div)`
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
    margin: 0.5rem 0;
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
