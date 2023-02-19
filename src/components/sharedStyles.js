import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin-bottom: 3rem;

  h3 {
    margin: 1rem 0 0;
    font-size: 1.5em;

    @media only screen and (max-width: 501px) {
      font-size: 1.3em;
    }
  }
`;

export const HomeWrapper = styled(motion.div)`
  padding: 0 1rem;

  @media only screen and (max-width: 400px) {
    padding: 0 0.5rem;
  }
`;

export const Error = styled.p`
  text-align: center;
`;

export const Card = styled.div`
  border-radius: 15px;
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
  min-height: 100vh;
  background-color: #efefef;
  padding: 0 0.5rem;

  @media only screen and (min-width: 500px) {
    padding: 0 1rem;
  }
  @media only screen and (min-width: 1051px) {
    padding: 0 5rem;
  }
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
  left: 5rem;
  top: 60%;

  @media only screen and (max-width: 1500px) {
    left: 50%;
    top: -10%;
    transform: translate(-50%, 50%);
    width: 100%;
    text-align: center;
  }
`;
