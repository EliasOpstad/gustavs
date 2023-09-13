import React from "react";
import tapas from "../Images/Tapas-Brett.jpg";
import styled from "styled-components";
import { ImageRow } from "../CommonComponents/ImageRow";
import { Column } from "../styles/Style-helper";
import Line from "../CommonComponents/Line";

const HomeContainer = styled.div`
  display: grid;

  margin: auto;
`;
const Tapas = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const Headline = styled.div`
  margin: auto;
  align-content: center;
  h1 {
    font-size: 50px;
  }
`;
const TextContainer = styled(Column)`
  width: 80%;
  margin: auto;
  display: flex;
`;
const PContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <Tapas src={tapas} />
        <TextContainer>
          <Headline>
            <h1>Gustav's Vinbar & Tapas </h1>
          </Headline>
          <PContainer>
            Lorem Ipsum is simply dummy text of the print ing and typesetting
            industry. Lorem Ipsum has been the industry's s tandard dummy text
            ever since the 1500s, when an unknown printer took a ga lley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unch anged. It was popularised in the 1960s
            with the release of Letraset sheet s containing Lorem Ipsum
            passages, and more recently with desktop publishing software like.
          </PContainer>
        </TextContainer>
        <Line />
        <ImageRow />
      </HomeContainer>
    </>
  );
};

export default HomePage;
