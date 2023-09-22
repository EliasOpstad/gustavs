import React from "react";
import styled from "styled-components";

import soknad from "../Images/soknad.png";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
const Soknad = styled.img`
  display: flex;
  width: 50%;
  margin: auto;
`;

const JobbHosOss = () => {
  return (
    <Container>
      <Soknad src={soknad} />
    </Container>
  );
};

export default JobbHosOss;
