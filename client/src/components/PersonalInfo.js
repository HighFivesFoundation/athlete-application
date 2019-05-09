import React from "react";
import { PreviousNext } from "./PreviousNext";
import styled from "styled-components";
import { TextInput } from "./FormComponents/TextInput";

export const PersonalInfo = () => {
  return (
    <Container>
      <h2>Personal Info</h2>
      <form>
        <label htmlFor="paidProfessional">
          Are you a paid professional in your sport?
        </label>
        <select id="paidProfessional" name="paidProfessional">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label htmlFor="club">Are you part of a ski or snowboard club?</label>
        <select id="club" name="club">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label htmlFor="socialSecurity">
          Do you receive Social Security Disability Insurance Benefits?
        </label>
        <select id="socialSecurity" name="socialSecurity">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <TextInput
          fieldName="adjustedGrossIncome"
          type="number"
          label="Adjusted Gross Income (reported on previous year's tax returns)"
        />
        <label htmlFor="raceEthnicity">Race & Ethnicity</label>
        <select id="raceEthnicity" name="raceEthnicity">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="ASIAN">Asian</option>
          <option value="BLACK">Black</option>
          <option value="CAUCASIAN">Caucasian</option>
          <option value="LATINO">Latino</option>
          <option value="MIDDLE_EASTERN">Middle Eastern</option>
          <option value="NATIVE_AMERICAN">Native American</option>
          <option value="PACIFIC_ISLANDER">Pacific Islander</option>
          <option value="TWO_OR_MORE">Two or More Races</option>
          <option value="OTHER">Other</option>
        </select>
      </form>
      <PreviousNext prevLink="/funding/travel" />
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
