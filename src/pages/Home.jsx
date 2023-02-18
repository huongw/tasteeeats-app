import React from "react";
import { MostPopular, Veggie, Desserts } from "./index";
import { HomeWrapper } from "../components/sharedStyles";

function Home() {
  return (
    <HomeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MostPopular />
      <Veggie />
      <Desserts />
    </HomeWrapper>
  );
}

export default Home;
