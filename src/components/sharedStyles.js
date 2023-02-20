import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 2rem auto;
  width: 90%;

  h2 {
    font-size: 1.8em;

    @media only screen and (max-width: 370px) {
      font-size: 1.3em;
    }
  }
`;

export const Error = styled.p`
  margin: 5em 0;
  text-align: center;
`;

export const imageMotion = {
  rest: {
    width: "100%",
    height: "100%",
    transform: "scale(1)",
  },
  hover: {
    transform: "scale(1.1)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const imageMotion2 = {
  rest: {
    transform: "scale(1)",
  },
  hover: {
    transform: "scale(1.1)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const Card = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 100%;

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
