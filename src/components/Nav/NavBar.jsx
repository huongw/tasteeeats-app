import { GiKnifeFork } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { SearchBar } from "../../pages";
import FavoritesContext from "../../FavoritesContext";
import { useContext } from "react";
import styled from "styled-components";
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
      <Cart to={"/favorites"}>
        <MdFavorite />
        <span>{favorites.length}</span>
        <p>Favorites</p>
      </Cart>
    </Nav>
  );
}

const Nav = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  @media only screen and (max-width: 900px) {
    justify-content: center;
    gap: 0.5em;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 400;
  font-family: "Lobster Two", cursive;

  @media only screen and (max-width: 900px) {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 50%);
    width: 100%;
    text-align: center;
  }
`;

const Cart = styled(Link)`
  position: relative;

  svg {
    width: 35px;
    height: 35px;
  }

  p {
    transform: translateY(-100%);
    margin-bottom: 2px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-20%, -100%);
  }

  @media only screen and (max-width: 900px) {
    p {
      font-size: 0;
    }
  }

  span {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
`;

export default NavBar;
