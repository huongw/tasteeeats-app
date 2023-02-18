import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 2rem 0 0;

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 2em;
  }
`;

export const HomeWrapper = styled(motion.div)`
  @media only screen and (max-width: 501px) {
    padding-bottom: 50px;
  }
`;

export const Card = styled.div`
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
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
    width: 98%;
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
  font-size: 2em;
  font-weight: 400;
  font-family: cursive;
  position: absolute;
  left: 0;
  top: 60%;

  @media only screen and (max-width: 1200px) {
    left: 50%;
    top: -10%;
    transform: translate(-50%, 50%);
    width: 100%;
    text-align: center;
  }
`;
