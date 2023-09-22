import React from "react";
import tbc from "../Images/tapas-brett-close.jpeg";
import blaa from "../Images/Blaaskjell2.jpg";
import GustavBilde from "../Images/Gustav-Helland.png";
import bestillBord from "../Images/Bord-hoyre-close.jpg";
import styled from "styled-components";
import { PHONE, EMAIL } from "../helper/HelperVariables";
import { useNavigate } from "react-router-dom";
import { PATH_ABOUTGUSTAV } from "../RouterFolder/Routes";
import { Column } from "../styles/Style-helper";

const Bilde = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Element = styled(Column)``;

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

const LinkText = styled.p`
  margin: 0;
  color: #75ffb8;
  &:hover {
    cursor: pointer;
    color: #ff6ff8d2;
  }
`;
const Description = styled.p`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const ImageRow = () => {
  const navigate = useNavigate();
  return (
    <>
      <ImageGallary>
        <Element>
          <Bilde src={bestillBord} />
          <Title>Bestill Bord</Title>
          <Description>
            Ring: {PHONE} <br />
            Email: {EMAIL}
          </Description>
        </Element>
        <Element>
          <Bilde src={blaa} />
          <Title>Råvarer av høy kvalitet</Title>
          <Description>
            Vi bruker lokale leverandører og kortreiste produkter når det er
            mulig.
          </Description>
        </Element>
        <Element>
          <Bilde src={tbc} />
          <Title>Tapas</Title>
          <Description>
            Vi har et utvalg av ulik småretter som supplerer din planke.
          </Description>
        </Element>
        <Element>
          <Bilde src={GustavBilde} />
          <Title>Om Gustav</Title>
          <Description>
            Hvem var Gustav Helland?{" "}
            <LinkText onClick={() => navigate(PATH_ABOUTGUSTAV)}>
              {" "}
              Les mer her...
            </LinkText>
          </Description>
        </Element>
      </ImageGallary>
    </>
  );
};
