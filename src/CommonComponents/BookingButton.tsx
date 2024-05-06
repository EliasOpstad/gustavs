import styled from "styled-components";
import { FOOTER_COLOR } from "../helper/HelperVariables";

const BookButton = styled.div`
  width: 80px;
  height: 25px;
  background-color: #303236;
  border: 3px whitesmoke solid;
  border-radius: 10px;
  color: whitesmoke;
  padding: 10px;
  align-content: center;
  text-align: center;

  &:hover {
    background-color: ${FOOTER_COLOR};
    cursor: pointer;
  }
`;

export const BookingButton = () => {
  return (
    <BookButton
      onClick={() =>
        window.open("https://gustavs-vinbar-og-tapas.munu.shop/bookings")
      }
    >
      Book bord
    </BookButton>
  );
};
