import React from "react";
import tapas from "../Images/forside-plankeBilde.jpg";
import styled from "styled-components";
import { ImageRow } from "../CommonComponents/ImageRow";
import { Column } from "../styles/Style-helper";
import Line from "../CommonComponents/Line";
import { BLACK_COLOR, WHITE_COLOR } from "../helper/HelperVariables";

const HomeContainer = styled.div`
  margin: auto;
  background-color: ${BLACK_COLOR};
  color: ${WHITE_COLOR};
`;
const Tapas = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 0;
  @media only screen and (max-width: 1024px) {
    height: 300px;
  }
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
  text-align: center;
  font-size: 40px;
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
            Del et måltid med dine gode venner. Gustavs anbefaler Planke med
            nydelige skinker og oster. Sammen med noe godt i glasset blir dette
            en hyggelig opplevelse
          </PContainer>
        </TextContainer>
        <Line />
        <ImageRow />
      </HomeContainer>
    </>
  );
};

export default HomePage;
