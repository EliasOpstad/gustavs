import React from "react";
import styled from "styled-components";
import { ADDRESS } from "../helper/HelperVariables";

const Container = styled.div``;
const Header = styled.h2``;
const ContactUs = () => {
  return (
    <Container>
      <Header>Kontakt oss:</Header>
      {ADDRESS}
    </Container>
  );
};

export default ContactUs;
