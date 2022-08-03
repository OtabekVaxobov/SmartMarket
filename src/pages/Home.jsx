import * as React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar.jsx";
const Container = styled.div`
  border: 1px solid;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <h1>Home PAGE</h1>
    </Container>
  );
};

export default Home;
