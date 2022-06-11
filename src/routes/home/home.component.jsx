import React from "react";
import "./home.styles.jsx";
import Directory from "../../components/directory/directory.component";
import { HomeContainer } from "./home.styles.jsx";

const Home = () => {
  return (
    <HomeContainer>
      <Directory />
    </HomeContainer>
  );
};

export default Home;
