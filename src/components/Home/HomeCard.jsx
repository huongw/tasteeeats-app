import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient, imageMotion } from "../sharedStyles";
import { motion } from "framer-motion";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

function HomeCard({ food, isLoading, title }) {

  return (
    <Wrapper>
      {!isLoading && (
        <>
          <h2>{title}</h2>
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
            {food.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card whileHover="hover" initial="rest" animate="rest">
                    <FavoriteIcon cuisine={recipe} />
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

export default HomeCard;
