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
  border-radius: 8px;
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
  width: 95vw;
  max-width: 1600px;
  margin: auto;
  min-height: 100vh;
  background-color: #efefef;
`;

export const Nav = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
`;

export const Cart = styled(Link)`
  position: absolute;
  right: 8%;
  bottom: 5%;

  svg {
    width: 35px;
    height: 35px;
  }

  @media only screen and (max-width: 900px) {
    right: 5%;
  }

  @media only screen and (max-width: 600px) {
    right: 2%;

    svg {
      width: 30px;
      height: 30px;
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

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  position: absolute;
  left: 5rem;
  top: 60%;

  @media only screen and (max-width: 1500px) {
    left: 50%;
    top: 0;
    transform: translate(-50%, 50%);
    width: 100%;
    text-align: center;
  }
`;

export const MotionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem auto 0;
  width: 90%;

  h2 {
    font-size: 1.8em;
    text-align: center;
    line-height: 1em;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
  gap: 1em;
`;

export const Card2 = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 320px;
  margin-bottom: 2em;

  @media only screen and (max-width: 770px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 1em;
    width: 90%;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }

  p {
    text-align: center;
    padding: 1em 0.5em;
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 2;
  }
`;

export const Icon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  outline: 0;
  border: 0;
  background: none;
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;

    path {
      stroke: #000;
      fill: ${(props) => (props.active ? "red" : "#fff")};
    }
  }

`;

export const Trash = styled(Icon)`
  background: #fefefe;
  border-radius: 50%;
  border: 1px solid;

  svg path {
    fill: #000;
  }
`;
