import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: #9932cc;
  color: #fff;
  align-items: center;

  justify-content: space-around;
`;
const Loge = styled.a`
  font-size: 30px;
  font-family: cursive;
`;
const AboutButton = styled.a`
  font-family: cursive;
  font-size: 20px;
  padding: 5px;
  &:active {
    background-color: #e6007e;
    border-radius: 50%;
  }
  &:hover {
    cursor: pointer;
  }
`;

const NavBar = () => {
  const nav = useNavigate();
  return (
    <Container>
      <Loge href="/">Smart Market</Loge>
      <AboutButton onClick={() => nav("/about")}>About</AboutButton>
    </Container>
  );
};

export default NavBar;
