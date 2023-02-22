import { GiKnifeFork } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { Nav, Logo } from "./sharedStyles";
import { SearchBar } from "../pages";
import FavoritesContext from "../FavoritesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Nav>
      <Logo to={"/"}>
        <GiKnifeFork />
        TasteeEats
      </Logo>
      <SearchBar />
      <Link to={"/favorites"}>
        <MdFavorite />
        <span>{favorites.length}</span>
      </Link>
    </Nav>
  );
}

export default NavBar;
