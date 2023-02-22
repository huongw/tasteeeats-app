import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Loader } from "./index";
import { FaUtensils } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";
import { GiGrain } from "react-icons/gi";

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
        setRecipe(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <>
      {isLoading && <Loader />}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2>{recipe.title}</h2>
        {!isLoading && (
          <>
            <Flex>
              <ImgWrapper>
                <img src={recipe.image} alt={recipe.title} />
                <SpanWrapper>
                  <span>
                    <TfiTimer /> {recipe.readyInMinutes} Minutes
                  </span>
                  <span>
                    <FaUtensils /> {recipe.servings} {recipe.servings > 1 ? "Servings" : "Serving"}
                  </span>
                  <span>
                    {recipe.glutenFree && (
                      <>
                        <GiGrain /> {recipe.glutenFree} Gluten Free
                      </>
                    )}
                  </span>
                </SpanWrapper>
              </ImgWrapper>
              <Card>
                {Object.keys(recipe).length !== 0 && (
                  <>
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
                  </>
                )}
                <Info>
                  {active === "instructions" && (
                    <>
                      <p
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}
                      ></p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: recipe.instructions,
                        }}
                      ></div>
                    </>
                  )}
                  {active === "ingredients" && (
                    <ul>
                      {recipe.extendedIngredients.map((ingredient) => {
                        return (
                          <li key={ingredient.id}>{ingredient.original}</li>
                        );
                      })}
                    </ul>
                  )}
                </Info>
              </Card>
            </Flex>
          </>
        )}
      </MotionDiv>
    </>
  );
}

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1500px;
  margin: auto;

  h2 {
    width: 80%;
    margin: 1em auto 0.5em;
    line-height: 1.3em;
    text-align: center;

    @media only screen and (min-width: 1301px) {
      margin: 0 auto 1em;
    }

    @media only screen and (min-width: 450px) {
      font-size: 2rem;
    }
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  @media only screen and (min-width: 1301px) {
    padding: 2em 0;
  }
`;

const SpanWrapper = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-wrap: wrap;

  span {
    padding-right: 1em;
  }
`;

const Flex = styled.div`
  display: flex;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 80%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 1301px) {
    padding: 0 2rem;
  }
`;

const ImgWrapper = styled.div`
  width: 80%;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 1301px) {
    max-width: 600px;
  }
`;

const Info = styled.div`
  margin: 2rem 0;

  p {
    margin: 1rem 0;
  }

  li {
    margin: 0.5rem 0;
    list-style: none;
  }
`;

const Button = styled.button`
  padding: 1em 2em;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2em;
  font-weight: 600;
  cursor: pointer;

  @media only screen and (max-width: 1300px) {
    margin-top: 1em;
  }

  @media only screen and (max-width: 500px) {
    margin-right: 1em;
    padding: 1em;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

export default Recipe;
