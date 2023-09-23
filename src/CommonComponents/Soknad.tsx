import React from "react";
import styled from "styled-components";
import { NAVN_CAPS } from "../helper/HelperVariables";

const Container = styled.div`
  text-align: center;
  background-color: #1b1b1b;
  color: white;
  line-height: 1.5;
  padding-top: 20px;
  padding-bottom: 75px;
  margin: auto;
  width: 50%;

  @media (max-width: 920px) {
    width: 80%;
    margin: auto;
  }
  & h1 {
    font-size: 20px;
  }
`;

const Soknad = () => {
  return (
    <Container>
      <h1> {NAVN_CAPS} SØKER SERVITØR MED KOMPETANSE OM VIN</h1>
      <p></p>
      <p>
        Gustav´s er en nyoppstartet taps og vinbar i Stavanger, som holder til
        på Eiganes i de gamle lokalene til Cafe d France. Stedet er intimt og
        koselig med 40 sitteplasser.
      </p>

      <p>
        Vi serverer tradisjonell tapas med blåskjell, skiner, oster, m.m, samt
        andre tapasinspirerte retter. I sesongen vil vi også ha Lutefisk på
        menyen. Målet vårt er å servere byens beste Lutefisk!
      </p>

      <p>
        Vi søker et utadvendt og sprudlende menneske som har en genuin interesse
        for å sette gjestene i sentrum. Vi er et folkelig sted, med hyggelig og
        god atmosfære, som skal være et typsik nabolagssted. Her skal man kunne
        nyte et godt glass vin, litt taps eller en helaften.{" "}
      </p>

      <p>
        Vi søker medarbeidere som har erfaring som: servitør/ vinkelner/
        sommelier
      </p>
      <p>
        Arbeidstid er primært helg - fredag og lørdag kveld, og dagtid
        søndag.Noe ekstra i ukedager må påbegrenes, særlig i sesongen
      </p>

      <p>
        Søknadsfrist: Vi behandler alle søknader fortløpende. Siste frist er
        10.10. 2023. Lønn etter avtale.{" "}
      </p>

      <p>
        Send din CV og søknad til "post@isyliving.no eller kontakt daglig leder
        Jarle Johansen på 951 79 567
      </p>
    </Container>
  );
};

export default Soknad;