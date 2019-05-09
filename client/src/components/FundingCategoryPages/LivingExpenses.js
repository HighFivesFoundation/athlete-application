import React from "react";
import { PreviousNext } from "../PreviousNext";
import styled from "styled-components";
import { TextInput } from "../FormComponents/TextInput";

export const LivingExpenses = () => {
  return (
    <Container>
      <h3>Living Expenses</h3>
      <form>
        {/* <label htmlFor="LIVING_EXPENSES">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Living Expenses category. If
          you are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="LIVING_EXPENSES" name="LIVING_EXPENSES" />
        <br /> */}
        <TextInput
          fieldName="amount"
          type="number"
          label="What is the total dollar amount being requested for this category?"
        />
      </form>
      <PreviousNext prevLink="/funding" nextLink="/funding/insurance" />
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
