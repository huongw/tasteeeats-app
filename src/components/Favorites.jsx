import { Card2, Gradient, imageMotion, Flex, MotionDiv } from "./sharedStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import FavoritesContext from "../FavoritesContext";

function Favorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const favoriteItems = localStorage.getItem("favorites");

    if (favoriteItems) {
      setFavorites(JSON.parse(favoriteItems));
    }
  }, []);

  return (
    <MotionDiv>
      <h2>My Favorites</h2>
      <Flex>
        {favorites.map((item) => {
          return (
            <Card2
              key={item.id}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link to={`/recipe/${item.id}`}>
                <p>{item.title}</p>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  variants={imageMotion}
                />
                <Gradient />
              </Link>
            </Card2>
          );
        })}
      </Flex>
    </MotionDiv>
  );
}

export default Favorites;
