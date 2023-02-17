import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

function Searched() {
  const [searches, setSearches] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.search}&number=12`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setSearches(res.data.results));
  }, [params.search]);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searches.map((cuisine) => {
        return (
          <Card key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}`}>
              <h4>{cuisine.title}</h4>
              <img src={cuisine.image} alt={cuisine.title} />
            </Link>
          </Card>
        );
      })}
    </MotionDiv>
  );
}

const MotionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
  max-width: 1500px;
  margin: auto;
  flex-wrap: wrap;
`;

const Card = styled.div`
  max-width: 300px;
  height: 100%;

  img {
    width: 100%;
    border-radius: 2rem;
    object-fit: none;
  }

  h4 {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

export default Searched;
