import React from 'react';
import logo from '../CommonComponents/logo.png';
import styled from 'styled-components';


const HomeContainer = styled.div`
  display: grid;

`
const Logo = styled.img`
width: 100%;
`

const Headline = styled.div`
  margin: auto;
  align-content: center;
h1{
    font-size: 50px;  
  }
`
const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  display:flex;
  flex-direction: column;

`
const PContainer = styled.div`
  width: 80%;
  margin: auto;
`
const ImageGallary = styled.div`
  width: 80%;
  margin: auto;
`

const HomePage = () => {
  return (
    <>
    <HomeContainer>
      <Logo src ={logo}/>
      <TextContainer>
      <Headline><h1>Gustavs Restaurant</h1></Headline>
      <PContainer>Lorem Ipsum is simply dummy text of the print
        ing and typesetting industry. Lorem Ipsum has been the industry's s
        tandard dummy text ever since the 1500s, when an unknown printer took a ga
        lley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unch
        anged. It was popularised in the 1960s with the release of Letraset sheet
        s containing Lorem Ipsum passages, and </PContainer>
      </TextContainer>
    <ImageGallary>

    </ImageGallary>
    </HomeContainer>
    </>
  );
}

export default HomePage;
