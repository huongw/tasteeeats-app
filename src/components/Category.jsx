import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Asian"}>
        <GiChopsticks />
        <h4>Asian</h4>
      </StyledLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  width: 5em;
  height: 5em;
  transform: scale(0.8);
  
  @media only screen and (max-width: 400px) {
    width: 4em;
    height: 4em;
  }

  h4 {
    color: #fff;
    font-size: 0.75em;

    @media only screen and (min-width: 401px) {
      font-size: 1em;
    }
  }

  svg {
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 0.3em;
  }

  @media only screen and (min-width: 600px) {
    width: 6em;
    height: 6em;
    margin: 0 .5em;

    svg {
      font-size: 1.5em;
    }
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg,
    h4 {
      color: #fff;
    }
  }
`;

export default Category;
