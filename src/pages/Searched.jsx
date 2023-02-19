import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Loader } from "./index";
import { Gradient, Error } from "../components/sharedStyles";

function Searched({ error, setError }) {
  const [searches, setSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      .then((res) => setSearches(res.data.results))
      .catch((err) => setError("Oops, please try again later!"))
      .finally(() => setIsLoading(false));
  }, [params.search, setError]);

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
        {!error && (
          <>
            {searches.map((cuisine) => {
              return (
                <Card key={cuisine.id}>
                  <Link to={`/recipe/${cuisine.id}`}>
                    <h4>{cuisine.title}</h4>
                    <img src={cuisine.image} alt={cuisine.title} />
                    <Gradient />
                  </Link>
                </Card>
              );
            })}
          </>
        )}
      </MotionDiv>
    </>
  );
}

const MotionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1500px;
  margin: 2rem auto 0;
  flex-wrap: wrap;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  height: 100%;
  margin: 0 .5rem 1.2rem;

  @media only screen and (max-width: 825px) {

    img {
      width: 100%;
    }
  }

  h4 {
    text-align: center;
    padding: 1em 0.5em;
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 2;
  }
`;

export default Searched;
