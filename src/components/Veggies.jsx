import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient, imageMotion } from "./sharedStyles";
import { motion } from "framer-motion";

function Veggie({ veggie, isLoading }) {
  return (
    <Wrapper>
      {!isLoading && (
        <>
          <h2>Vegetarian</h2>
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
            {veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Link to={`/recipe/${recipe.id}`}>
                    <Card whileHover="hover" initial="rest" animate="rest">
                      <p>{recipe.title}</p>
                      <motion.img
                        src={recipe.image}
                        alt={recipe.title}
                        variants={imageMotion}
                      />
                      <Gradient />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </>
      )}
    </Wrapper>
  );
}

export default Veggie;
