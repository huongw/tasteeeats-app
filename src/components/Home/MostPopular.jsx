import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient, imageMotion2, Icon } from "../sharedStyles";
import { motion } from "framer-motion";
import FavoritesContext from "../../FavoritesContext";
import { useContext } from "react";
import { GrFavorite } from "react-icons/gr";
import isItemInFavorites from "../../helpers/isItemInFavorites";

function MostPopular({ popular, isLoading }) {
  const { favorites, addToFavorites } = useContext(FavoritesContext);

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
                    <Icon
                      onClick={() => {
                        if (!isItemInFavorites(recipe.id, favorites)) {
                          addToFavorites(recipe.id, recipe.title, recipe.image);
                        }
                      }}
                    >
                      <GrFavorite />
                    </Icon>
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
