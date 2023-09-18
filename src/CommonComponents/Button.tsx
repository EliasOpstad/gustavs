import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
  justify-content: center;
`;
function Button() {
  return (
    <Container>
      <button>Menu</button>
    </Container>
  );
}

export default Button;
