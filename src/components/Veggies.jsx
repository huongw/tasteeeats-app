import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient } from "./sharedStyles";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const veggieItems = localStorage.getItem("veggie");

    if (veggieItems) {
      setVeggie(JSON.parse(veggieItems));
      return;
    }
    axios
      .get(
        `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("veggie", JSON.stringify(res.data.recipes));
        setVeggie(res.data.recipes);
      });
  }, []);

  return (
    <Wrapper>
      <h3>Vegetarian</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "1em",
          breakpoints: {
            1050: {
              perPage: 3,
            },
            800: {
              perPage: 2,
            },
            500: {
              perPage: 1,
            },
          }
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Veggie;
