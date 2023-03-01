import {
  Card2,
  Gradient,
  imageMotion,
  Flex,
  MotionDiv,
  Trash,
} from "../sharedStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../FavoritesContext";
import { GiTrashCan } from "react-icons/gi";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

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
              <Trash onClick={() => removeFavorite(item.id)}>
                <GiTrashCan />
              </Trash>
            </Card2>
          );
        })}
      </Flex>
    </MotionDiv>
  );
}

export default Favorites;
