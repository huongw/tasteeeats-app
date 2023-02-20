import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Loader } from "./index";
import { Gradient, Error, imageMotion } from "../components/sharedStyles";

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
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {!error && !isLoading && (
          <>
            {searches.length === 0 ? (
              <p>
                {`Sorry, there are no search results for "${params.search}"`}
              </p>
            ) : (
              <>
                <h2>Search Results: {params.search}</h2>
                <Flex>
                  {searches.map((cuisine) => {
                    return (
                      <Card
                        key={cuisine.id}
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                      >
                        <Link to={`/recipe/${cuisine.id}`}>
                          <p>{cuisine.title}</p>
                          <motion.img
                            src={cuisine.image}
                            alt={cuisine.title}
                            variants={imageMotion}
                          />
                          <Gradient />
                        </Link>
                      </Card>
                    );
                  })}
                </Flex>
              </>
            )}
          </>
        )}
      </MotionDiv>
    </>
  );
}

const MotionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  margin: 2rem auto 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: .5em;
`;

const Card = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 100%;
  margin: 0 1rem 1.2rem;

  p {
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
