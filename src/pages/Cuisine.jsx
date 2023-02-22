import { useEffect, useState, useContext } from "react";
import FavoritesContext from "../FavoritesContext";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "./index";
import {
  Gradient,
  Error,
  imageMotion,
  MotionDiv,
  Flex,
  Card2,
  Icon,
} from "../components/sharedStyles";
import { GrFavorite } from "react-icons/gr";
import isItemInFavorites from "../helpers/isItemInFavorites";

function Cuisine({ error, setError }) {
  const [cuisines, setCuisines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const { favorites, addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    axios
      .get(
        `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params.type}&number=12`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setCuisines(res.data.results))
      .catch((err) => setError("Oops, please try again later!"))
      .finally(() => setIsLoading(false));
  }, [params.type, setError]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Error>
          <strong>{error}</strong>
        </Error>
      )}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!error && !isLoading && (
          <>
            <h2>{params.type} Dishes</h2>
            <Flex>
              {cuisines.map((cuisine) => (
                <Card2
                  key={cuisine.id}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <Icon
                    onClick={() => {
                      if (!isItemInFavorites(cuisine.id, favorites)) {
                        addToFavorites(
                          cuisine.id,
                          cuisine.title,
                          cuisine.image
                        );
                      }
                    }}
                  >
                    <GrFavorite />
                  </Icon>
                  <Link to={`/recipe/${cuisine.id}`}>
                    <p>{cuisine.title}</p>
                    <motion.img
                      src={cuisine.image}
                      alt={cuisine.title}
                      variants={imageMotion}
                    />
                    <Gradient />
                  </Link>
                </Card2>
              ))}
            </Flex>
          </>
        )}
      </MotionDiv>
    </>
  );
}

export default Cuisine;
