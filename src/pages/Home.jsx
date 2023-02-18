import React from "react";
import { MostPopular, Veggie, Desserts } from "./index";
import { HomeWrapper, Error } from "../components/sharedStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "./index";

function Home({ error, setError }) {
  const [popular, setPopular] = useState([]);
  const [veggie, setVeggie] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const popularURL = axios.get(
      `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const veggieURL = axios.get(
      `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
    );
    const dessertURL = axios.get(
      `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=desserts`
    );

    // const popularItems = localStorage.getItem("popular");
    // const veggieItems = localStorage.getItem("veggie");
    // const dessertItems = localStorage.getItem("desserts");

    // if (popularItems && veggieItems && dessertItems) {
    //   setPopular(JSON.parse(popularItems));
    //   setVeggie(JSON.parse(veggieItems));
    //   setDesserts(JSON.parse(dessertItems));
    //   return;
    // }

    setIsLoading(true);
    axios
      .all([popularURL, veggieURL, dessertURL], {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        axios.spread((...res) => {
          // localStorage.setItem("popular", JSON.stringify(res[0].data.recipes));
          // localStorage.setItem("veggie", JSON.stringify(res[1].data.recipes));
          // localStorage.setItem("desserts", JSON.stringify(res[2].data.recipes));
          setPopular(res[0].data.recipes);
          setVeggie(res[1].data.recipes);
          setDesserts(res[2].data.recipes);
        })
      )
      .catch((err) => setError("Oops, please try again later!"))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Error>
          <strong>{error}</strong>
        </Error>
      )}
      <HomeWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {!error && (
          <>
            <MostPopular popular={popular} isLoading={isLoading} />
            <Veggie veggie={veggie} isLoading={isLoading} />
            <Desserts desserts={desserts} isLoading={isLoading} />
          </>
        )}
      </HomeWrapper>
    </>
  );
}

export default Home;
