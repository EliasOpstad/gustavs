import React from "react";
import tapas from "../Images/forside-plankeBilde.jpg";

import styled from "styled-components";
import { ImageRow } from "../CommonComponents/ImageRow";
import { Column } from "../styles/Style-helper";
import Line from "../CommonComponents/Line";
import {
  BLACK_COLOR,
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
  FONT_SIZE_LARGE,
  FONT_SIZE_XLARGE,
  NAVN,
  WHITE_COLOR,
} from "../helper/HelperVariables";

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
    text-align: center;

    font-size: ${FONT_SIZE_XLARGE};
    @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
      font-size: ${FONT_SIZE_XLARGE};
    }
    @media screen and (max-width: ${BREAKPOINT_SMALL}) {
      font-size: ${FONT_SIZE_LARGE};
    }
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
  font-size: 35px;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    font-size: 20px;
  }
  @media screen and (max-width: ${BREAKPOINT_SMALL}) {
    font-size: 18px;
    width: 90%;
  }
`;

const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <Tapas src={tapas} />
        <TextContainer>
          <Headline>
            <h1>{NAVN}</h1>
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
