import { GrFavorite } from "react-icons/gr";
import isItemInFavorites from "../../helpers/isItemInFavorites";
import { useContext } from "react";
import {
  Gradient,
  imageMotion,
  Flex,
  Card2,
  Icon,
} from "../sharedStyles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FavoritesContext from "../../FavoritesContext";

function Card({ cuisines }) {
  const { favorites, addToFavorites } = useContext(FavoritesContext);

  return (
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
                addToFavorites(cuisine.id, cuisine.title, cuisine.image);
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
  );
}

export default Card;
