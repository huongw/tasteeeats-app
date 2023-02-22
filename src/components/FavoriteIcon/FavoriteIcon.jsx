import { useContext } from "react";
import isItemInFavorites from "../../helpers/isItemInFavorites";
import FavoritesContext from "../../FavoritesContext";
import { Icon } from "../sharedStyles";
import { GrFavorite } from "react-icons/gr";

function FavoriteIcon({ cuisine }) {
  const { favorites, addToFavorites } = useContext(FavoritesContext);

  const check = favorites.find((item) => item.id === cuisine.id);

  return (
    <Icon
      onClick={() => {
        if (!isItemInFavorites(cuisine.id, favorites)) {
          addToFavorites(cuisine.id, cuisine.title, cuisine.image, true);
        }
      }}
      active={check}
    >
      <GrFavorite />
    </Icon>
  );
}

export default FavoriteIcon;
