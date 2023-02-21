import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient, imageMotion2, Heart } from "./sharedStyles";
import { motion } from "framer-motion";
import FavoritesContext from "../FavoritesContext";
import { useContext } from "react";

function MostPopular({ popular, isLoading }) {
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <Wrapper>
      {!isLoading && (
        <>
          <h2>Most Popular</h2>
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "1em",
              breakpoints: {
                1050: {
                  perPage: 2,
                },
                520: {
                  perPage: 1,
                },
              },
            }}
          >
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card whileHover="hover" initial="rest" animate="rest">
                    <Heart
                      onClick={() =>
                        addToFavorites(recipe.id, recipe.title, recipe.image)
                      }
                    />
                    <Link to={`/recipe/${recipe.id}`}>
                      <p>{recipe.title}</p>
                      <motion.img
                        src={recipe.image}
                        alt={recipe.title}
                        variants={imageMotion2}
                      />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </>
      )}
    </Wrapper>
  );
}

export default MostPopular;
