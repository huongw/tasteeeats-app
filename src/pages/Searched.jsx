import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./index";
import { Error, MotionDiv } from "../components/sharedStyles";
import Card from "../components/Cuisine/Card";

function Searched({ error, setError }) {
  const [searches, setSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const paramSearch = params.search.split("+").join(" ");

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
              <p>Sorry, there are no search results for "{paramSearch}"</p>
            ) : (
              <>
                <h2>Search Results: {paramSearch}</h2>
                <Card cuisines={searches} />
              </>
            )}
          </>
        )}
      </MotionDiv>
    </>
  );
}

export default Searched;
