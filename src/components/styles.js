import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 3rem 0;

  h3 {
    margin: 1rem 0;
  }
`;

export const Card = styled.div`
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  height: 100%;

  img {
    width: 100%;
  }

  p {
    position: absolute;
    bottom: 0;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    margin: 1rem 0;
    text-align: center;
  }
`;

export const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const Container = styled.div`
  width: 90vw;
  max-width: 1500px;
  margin: auto;
  height: 100vh;
`;

export const Nav = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: cursive;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(50%);
`;