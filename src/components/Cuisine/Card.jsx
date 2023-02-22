import { Gradient, imageMotion, Flex, Card2 } from "../sharedStyles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

function Card({ cuisines }) {
  return (
    <Flex>
      {cuisines.map((cuisine) => (
        <Card2
          key={cuisine.id}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <FavoriteIcon cuisine={cuisine} />
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
