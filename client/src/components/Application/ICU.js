import React from "react";
import { PreviousNext } from "../PreviousNext";
import styled from "styled-components";
import { TextInput } from "../FormComponents/TextInput";

export const ICU = () => {
  return (
    <Container>
      <h2>Intensive Care / In-Patient Information</h2>
      <form>
        <TextInput
          fieldName="daysInICU"
          id="daysInICU"
          type="number"
          label="How many days were you at the ICU?"
        />
        <TextInput
          fieldName="nameOfHospital"
          id="nameOfHospital"
          type="text"
          label="Name of the ICU Hospital"
        />
        <TextInput
          fieldName="daysInInpatientRehab"
          id="daysInInpatientRehab"
          type="number"
          label="How many days were you in in-patient rehab?"
        />
        <TextInput
          fieldName="nameOfRehabHospital"
          id="nameOfRehabHospital"
          type="text"
          label="Name of the Rehab Hospital"
        />
        <PreviousNext prevLink="/injury-info" nextLink="/circumstances" />
      </form>
    </Container>
  );
};

const Container = styled.section`
  button {
    display: block;
    margin-top: 20px;
    background-color: #e5834c;
    color: #323e48;
    font-weight: bold;
  }

  .field {
    margin-top: 15px;
    width: 90%;
  }
`;
