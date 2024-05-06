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
  height: 600px;

  @media (max-width: 920px) {
    width: 80%;
    margin: auto;
  }
  & h1 {
    font-size: 20px;
  }
`;

const Text = styled.div`
  width: 80%;
  margin: auto;
  text-align: left;
  padding: 20px;
`;

const Soknad = () => {
  return (
    <Container>
      <Text>
        <h1> {NAVN_CAPS} SØKER SERVITØR MED KOMPETANSE OM VIN</h1>
        <p></p>
        <p>
          Gustav's er en nyoppstartet tapas og vinbar i Stavanger, som holder
          til på Eiganes i de gamle lokalene til Cafe d France. Stedet er intimt
          og koselig med 40 sitteplasser.
        </p>

        <p>
          Vi serverer tradisjonell tapas med blåskjell, skiner, oster, m.m, samt
          andre tapasinspirerte retter.
        </p>

        <p>
          Vi søker et utadvendt og sprudlende menneske som har en genuin
          interesse for å sette gjestene i sentrum. Vi er et folkelig sted, med
          hyggelig og god atmosfære, som skal være et typsik nabolagssted. Her
          skal man kunne nyte et godt glass vin, litt tapas eller en helaften.
        </p>

        <p>
          Vi søker medarbeidere som har erfaring som: servitør/ vinkelner/
          sommelier.
        </p>
        <p>
          Arbeidstid er primært helg - fredag og lørdag kveld. Noe ekstra i
          ukedager må påbegrenes, særlig i sesongen.
        </p>

        <p>
          Søknadsfrist: Vi behandler alle søknader fortløpende. Lønn etter
          avtale.{" "}
        </p>

        <p>
          Send din CV og søknad til "jarle@gustavs.no" eller kontakt daglig
          leder Jarle Johansen på 951 79 567.
        </p>
      </Text>
    </Container>
  );
};

export default Soknad;
