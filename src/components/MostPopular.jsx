import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function MostPopular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const popularItems = localStorage.getItem("popular");

    if (popularItems) {
      setPopular(JSON.parse(popularItems));
      return;
    }
    axios
      .get(`/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("popular", JSON.stringify(res.data.recipes));
        setPopular(res.data.recipes);
      });
  }, []);

  return (
    <Wrapper>
      <h3>Most Popular</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {popular.map((recipe) => {
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

const Wrapper = styled.div`
  h3 {
    margin: 1rem 0;
  }
`;

const Card = styled.div`
  border-radius: 25px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    bottom: 0;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    margin: 1rem 0;
    text-align: center;
  }
`;

const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default MostPopular;
