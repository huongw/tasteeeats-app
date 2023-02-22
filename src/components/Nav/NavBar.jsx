import { GiKnifeFork } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { Nav, Logo, Cart } from "../sharedStyles";
import { SearchBar } from "../../pages";
import FavoritesContext from "../../FavoritesContext";
import { useContext } from "react";

function NavBar() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Nav>
      <Logo to={"/"}>
        <GiKnifeFork />
        TasteeEats
      </Logo>
      <SearchBar />
      <Cart to={"/favorites"}>
        <MdFavorite />
        <span>{favorites.length}</span>
        <p>Favorites</p>
      </Cart>
    </Nav>
  );
}

export default NavBar;
