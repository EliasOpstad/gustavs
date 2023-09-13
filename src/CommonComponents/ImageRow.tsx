import React from "react";
import skampi from "../Images/Skampi.jpg";
import blaa from "../Images/Blaaskjell.jpg";
import GustavBilde from "../Images/Gustav-Helland.png";
import bestillBord from "../Images/Bord-hoyre-close.jpg";
import styled from "styled-components";

const Bilde = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageGallary = styled.div`
  padding: 20px;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 100px;
`;
const Title = styled.h2``;
const Description = styled.p`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const ImageRow = () => {
  return (
    <>
      <ImageGallary>
        <Element>
          <Bilde src={bestillBord} />
          <Title>Bestill Bord</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
        <Element>
          <Bilde src={skampi} />
          <Title>Varer av høy klasse</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
        <Element>
          <Bilde src={blaa} />
          <Title>Ferske ingredienser</Title>
          <Description>
            Tapas med mye spennede både full planke og småretter. Link til
            åpningstider og meny
          </Description>
        </Element>
        <Element>
          <Bilde src={GustavBilde} />
          <Title>Om Gustav</Title>
          <Description>
            Hvem var Gustav Helland? Hva var hans visjon? Les mer her...
          </Description>
        </Element>
      </ImageGallary>
    </>
  );
};
