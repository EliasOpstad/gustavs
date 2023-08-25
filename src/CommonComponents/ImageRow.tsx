import React from "react";
import logo from "../CommonComponents/logo.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
`;

const ImageGallary = styled.div`
  padding: 20px;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
`;
const Title = styled.h2``;
const Description = styled.p``;

export const ImageRow = () => {
  return (
    <>
      <ImageGallary>
        <Element>
          <Logo src={logo} />
          <Title>Restauranten</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
        <Element>
          <Logo src={logo} />
          <Title>Restauranten</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
        <Element>
          <Logo src={logo} />
          <Title>Restauranten</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
        <Element>
          <Logo src={logo} />
          <Title>Restauranten</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
      </ImageGallary>
    </>
  );
};
