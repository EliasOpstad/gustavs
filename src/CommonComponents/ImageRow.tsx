import React from "react";
import skampi from "../Images/Skampi.jpg";
import blaa from "../Images/Blaaskjell.jpg";
import GustavBilde from "../Images/Gustav-Helland.png";
import bestillBord from "../Images/Bord-hoyre-close.jpg";
import styled from "styled-components";
import { PHONE, EMAIL } from "../helper/HelperVariables";

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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
            <p>
              Ring: {PHONE} <br />
              Email: {EMAIL}
            </p>
          </Description>
        </Element>
        <Element>
          <Bilde src={blaa} />
          <Title>Varer av høy klasse</Title>
          <Description>
            Råvarer av høy kvalitet. Vi bruker lokale leverandører og kortreiste
            produkter når det er mulig.
          </Description>
        </Element>
        <Element>
          <Bilde src={skampi} />
          <Title>Ferske ingredienser</Title>
          <Description>
            Vi har et utvalg av ulik småretter som supplerer din planke.
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
