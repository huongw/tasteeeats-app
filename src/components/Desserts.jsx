import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient } from "./sharedStyles";

function Desserts() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const dessertItems = localStorage.getItem("desserts");

    if (dessertItems) {
      setDesserts(JSON.parse(dessertItems));
      return;
    }
    axios
      .get(
        `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=desserts`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("desserts", JSON.stringify(res.data.recipes));
        setDesserts(res.data.recipes);
      });
  }, []);

  return (
    <Wrapper>
      <h3>Desserts</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {desserts.map((recipe) => {
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

export default Desserts;
