import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient, imageMotion2 } from "./sharedStyles";
import { motion } from "framer-motion";

function MostPopular({ popular, isLoading }) {
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
                  <Link to={`/recipe/${recipe.id}`}>
                    <Card whileHover="hover" initial="rest" animate="rest">
                      <p>{recipe.title}</p>
                      <motion.img
                        src={recipe.image}
                        alt={recipe.title}
                        variants={imageMotion2}
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

export default MostPopular;
