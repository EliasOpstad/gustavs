import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Router from './RouterFolder/Router';
import { Header } from './CommonComponents/Header';
import styled from 'styled-components';


const Content = styled.div`
  items-align: center;
  width: 80%;
  margin: auto;
`;


const App:React.FC = () =>{
  return (
    <Content>
      <article>
        <BrowserRouter>
          <Header/>
          <Router/>
        </BrowserRouter>
      </article>
    </Content>
  );
}

export default App;
