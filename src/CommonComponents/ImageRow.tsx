import React from 'react';
import logo from '../CommonComponents/logo.png';
import styled from 'styled-components';



const Logo = styled.img`
width: 25%;
`

const Element = styled.div`
display: flex;
flex-direction: column;
`

const ImageGallary = styled.div`
  width: 80%;
  margin: auto;
display: grid;
`
const Title = styled.h3`
`;
const Description = styled.p`
`;

export const ImageRow = () => {
  return (
    <>
    <ImageGallary>
        <Element>
        <Logo src ={logo}/>
        <Title>Restauranten</Title>
        <Description>Tapas med mye spennede både full planke og småretter. 
            Link til åpningstider og meny</Description>
            </Element>

    </ImageGallary>
    </>
  );
}
