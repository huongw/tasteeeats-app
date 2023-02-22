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
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const removeItem = (id) => {
    const filtered = favorites.filter((item) => item.id !== id);
    setFavorites(filtered);
  };

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
              <Trash onClick={() => removeItem(item.id)}>
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
