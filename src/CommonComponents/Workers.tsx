import React from "react";
import picture from "../CommonComponents/exampleImage.png";
import styled from "styled-components";
import { Column, Row } from "../styles/Style-helper";
const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Image = styled.img`
  width: auto;
  height: 300px;
`;
const ContainerRow = styled(Row)`
  height: 300px;
  margin: 20px;
`;
const Person = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
`;
const PersonContent = styled.div``;
const Name = styled.h1``;
const Role = styled.h3``;
const Mail = styled.h3``;
const Description = styled.p``;

const Workers = () => {
  return (
    <Container>
      <ContainerRow>
        <Person>
          <Image src={picture} />
          <PersonContent>
            <Name>Navn Navnesen</Name>
            <Role>Kokk</Role>
            <Mail>mail@gmail.com</Mail>
            <Description>
              Tidligere landslagskokk Karl Erik Pallesen er medeier og matfaglig
              ansvarlig på Fisketorget, og har vært med siden dag 1. Han har
              konkurrert mye som kokk, både på kokkelandslaget, individuelle
              konkurranser og som coach i årets kokk 2015 og 2017.
            </Description>
          </PersonContent>
        </Person>
        <Person>
          <Image src={picture} />
          <PersonContent>
            <Name>Navn Navnesen</Name>
            <Role>Kokk</Role>
            <Mail>mail@gmail.com</Mail>
            <Description>
              Tidligere landslagskokk Karl Erik Pallesen er medeier og matfaglig
              ansvarlig på Fisketorget, og har vært med siden dag 1. Han har
              konkurrert mye som kokk, både på kokkelandslaget, individuelle
              konkurranser og som coach i årets kokk 2015 og 2017.
            </Description>
          </PersonContent>
        </Person>
      </ContainerRow>
      <ContainerRow>
        <Person>
          <Image src={picture} />
          <PersonContent>
            <Name>Navn Navnesen</Name>
            <Role>Kokk</Role>
            <Mail>mail@gmail.com</Mail>
            <Description>
              Tidligere landslagskokk Karl Erik Pallesen er medeier og matfaglig
              ansvarlig på Fisketorget, og har vært med siden dag 1. Han har
              konkurrert mye som kokk, både på kokkelandslaget, individuelle
              konkurranser og som coach i årets kokk 2015 og 2017.
            </Description>
          </PersonContent>
        </Person>
        <Person>
          <Image src={picture} />
          <PersonContent>
            <Name>Navn Navnesen</Name>
            <Role>Kokk</Role>
            <Mail>mail@gmail.com</Mail>
            <Description>
              Tidligere landslagskokk Karl Erik Pallesen er medeier og matfaglig
              ansvarlig på Fisketorget, og har vært med siden dag 1. Han har
              konkurrert mye som kokk, både på kokkelandslaget, individuelle
              konkurranser og som coach i årets kokk 2015 og 2017.
            </Description>
          </PersonContent>
        </Person>
      </ContainerRow>
    </Container>
  );
};

export default Workers;
