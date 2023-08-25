import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./RouterFolder/Router";
import { Header } from "./CommonComponents/Header";
import styled from "styled-components";
import Footer from "./CommonComponents/Footer";

const Content = styled.div`
  align-items: center;
  width: 100%;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <Content>
      <article>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </article>
    </Content>
  );
};

export default App;
