import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../CommonComponents/logo.png';



// interface List{
//   id: number;

//   dato: number;

//   mail: string;

//   name: string;

// }

const Container = styled.div`
  width: 80%;
  margin: auto;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const ContainerRow = styled.div`
  margin: auto;
  justify-content: space-around;
  align
`;

const Logo = styled.img`
    width: 50%;
    margin: auto;
`;
const TextContainer = styled.div`

`;
const NesteSide = styled.div`

`;

const ButtonContainerRow = styled.div`

    display: grid;
    width: 40%;
    grid-template-columns: 1fr 1fr 1fr;

    margin: auto;

`;
export const ReferencingContent = () =>{
  const [count, setCount] = useState<number>(0);
  
  const handleIncrement = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
  };
  
  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };
  

  const [part, setPart] = useState(1);
  const incrementPart = () => {
    setPart(part + 1);
    
  }
  const decresePart = () => {
    setPart(part - 1);
  }
    if (part === 1) {
        return (
            <>
              
              <Container>
      
              <ButtonContainerRow>
                <button onClick={handleDecrement} disabled={count === 0}>Decrease</button>
                <h2>{count} Gjester</h2>
                <button onClick={handleIncrement} disabled={count === 10}>Increase</button>
              </ButtonContainerRow>
              <NesteSide><button onClick={incrementPart} disabled={count === 0} >Neste</button></NesteSide>
          <ContainerRow>
                <TextContainer>
                <h1>Velkommen til online booking hos Gustavs</h1>
                <p>ÅPNINGSTIDER </p>
                <p>MANDAG - LØRDAG 11.00 - 00.00</p>
                <p>(KJØKKENET STENGER 22.00)</p>
                </TextContainer>
            <Logo src ={logo}/>
          </ContainerRow>
      
    </Container>
            </>
        );
    } else if (part === 2) {
        return (
            <Container>

            {/* 
              Oversikt over: 
              -Enkle bord
              -Koblet bord
              -Mulighet til å koble sammen bord.


              - 20 bord.
              - {(bord === ledig) ? {grønn} : {rød}}.
              - Relasjonsdatabase.
              - Prisma hente ut data.

              - Datpicker (https://www.npmjs.com/package/react-calendar)
            
            */}


              <p>HER SKAL DET VÆRE EN KALLENDER</p>
              <NesteSide><button onClick={incrementPart} disabled={count === 0}>Neste</button></NesteSide>
              <NesteSide><button onClick={decresePart} disabled={count === 0}>Tilbake</button></NesteSide>

            </Container>
        );
    } else if (part === 3) {
        return (
            <Container>
                
              <p>Skriv inn e-post:</p>
              <NesteSide><button onClick={incrementPart} disabled={count === 0}>Neste</button></NesteSide>
              <NesteSide><button onClick={decresePart} disabled={count === 0}>Tilbake</button></NesteSide>

            </Container>
        );
    } else if (part === 4) {
        return (
            <Container>
                
              <p>Skriv inn navn:</p>
              <NesteSide><button onClick={decresePart} disabled={count === 0}>Neste</button></NesteSide>

            </Container>
        );
    } 
    return <></>;
};
