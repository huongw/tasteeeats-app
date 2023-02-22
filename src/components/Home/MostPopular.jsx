import { imageMotion2 } from "../sharedStyles";
import HomeCard from "./HomeCard";

function MostPopular({ popular, isLoading }) {
  const settings = {
    perPage: 3,
    arrows: true,
    pagination: false,
    drag: "free",
    gap: "1em",
    breakpoints: {
      1050: {
        perPage: 2,
      },
      520: {
        perPage: 1,
      },
    },
  };
  return (
    <HomeCard
      food={popular}
      isLoading={isLoading}
      title={"Most Popular"}
      settings={settings}
      imageMotion={imageMotion2}
    />
  );
}

export default MostPopular;
