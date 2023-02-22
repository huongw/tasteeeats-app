import HomeCard from "./HomeCard";

function Desserts({ desserts, isLoading }) {

  return (
    <HomeCard food={desserts} isLoading={isLoading} title={"Desserts"}/>
  );
}

export default Desserts;
