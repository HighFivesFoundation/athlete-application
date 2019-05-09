import React from "react";
import { PreviousNext } from "../PreviousNext";
import styled from "styled-components";
import { TextInput } from "../FormComponents/TextInput";

export const HealingNetwork = () => {
  return (
    <Container>
      <h3>Healing Network</h3>
      <form>
        {/* <label htmlFor="HEALING_NETWORK">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Healing Network category. If
          you are not requesting funds for this category, just enter N/A:
        </label>
        <textarea rows="8" id="HEALING_NETWORK" name="HEALING_NETWORK" /> */}
        <TextInput
          fieldName="amount"
          type="number"
          label="What is the total dollar amount being requested for this category?"
        />
      </form>
      <PreviousNext
        prevLink="/circumstances"
        nextLink="/funding/living-expenses"
      />
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
