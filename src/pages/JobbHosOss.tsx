import React from "react";
import styled from "styled-components";

import Soknad from "../CommonComponents/Soknad";

const Container = styled.div`
  width: 100%;
  margin: auto;
  background-color: #1b1b1b;
`;

const JobbHosOss = () => {
  return (
    <Container>
      <Soknad />
    </Container>
  );
};

export default JobbHosOss;
