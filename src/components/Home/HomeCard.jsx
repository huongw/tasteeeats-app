import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient } from "../sharedStyles";
import { motion } from "framer-motion";

function HomeCard({ food, isLoading, title, settings, imageMotion }) {
  return (
    <Wrapper>
      {!isLoading && (
        <>
          <h2>{title}</h2>
          <Splide
            options={{
              ...settings,
            }}
          >
            {food.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card whileHover="hover" initial="rest" animate="rest">
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
