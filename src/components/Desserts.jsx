import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient, imageMotion, Heart } from "./sharedStyles";
import { motion } from "framer-motion";
import FavoritesContext from "../FavoritesContext";
import { useContext } from "react";

function Desserts({ desserts, isLoading }) {
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <Wrapper>
      {!isLoading && (
        <>
          <h2>Desserts</h2>
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
                600: {
                  perPage: 1,
                },
              },
            }}
          >
            {desserts.map((recipe) => {
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
                        variants={imageMotion}
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

export default Desserts;
