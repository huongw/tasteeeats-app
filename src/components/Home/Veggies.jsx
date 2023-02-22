import HomeCard from "./HomeCard";

function Veggie({ veggie, isLoading }) {

  return (
    <HomeCard food={veggie} isLoading={isLoading} title={"Vegetarian"}/>
  );
}

export default Veggie;
