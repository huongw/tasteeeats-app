import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, Card, Gradient } from "./sharedStyles";

function Desserts({ desserts, isLoading }) {
  return (
    <Wrapper>
      {!isLoading && (
        <>
          <h3>Desserts</h3>
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
                520: {
                  perPage: 1,
                },
              },
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
        </>
      )}
    </Wrapper>
  );
}

export default Desserts;
