import { imageMotion } from "../sharedStyles";
import HomeCard from "./HomeCard";

function Desserts({ desserts, isLoading }) {
  const settings = {
    perPage: 4,
    arrows: true,
    pagination: false,
    drag: "free",
    gap: "1em",
    breakpoints: {
      1050: {
        perPage: 3,
      },
      800: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  };

  return (
    <HomeCard
      food={desserts}
      isLoading={isLoading}
      title={"Desserts"}
      settings={settings}
      imageMotion={imageMotion}
    />
  );
}

export default Desserts;
