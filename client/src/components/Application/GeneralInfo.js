import React from "react";
import { PreviousNext } from "../PreviousNext";
import styled from "styled-components";
import { TextInput } from "../FormComponents/TextInput";

export const GeneralInfo = () => {
  return (
    <Container>
      <h2>General Info</h2>
      <form>
        <TextInput fieldName="password" type="password" />
        <TextInput fieldName="firstname" type="text" />
        <TextInput fieldName="lastname" type="text" />
        <label htmlFor="dateofbirth">Date of Birth</label>
        <input type="date" name="dateofbirth" id="dateofbirth" />
        <TextInput fieldName="address" type="text" />
        <TextInput fieldName="city" type="text" />
        <TextInput fieldName="state" type="text" />
        <TextInput fieldName="zip" type="zip" />
        <TextInput
          fieldName="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <label htmlFor="dateofinjury">Date of Injury</label>
        <input type="date" name="dateofinjury" id="dateofinjury" />
        <label htmlFor="tshirt">T-Shirt Size</label>
        <select id="tshirt" name="tshirt">
          <option>SM</option>
          <option>MD</option>
          <option>LG</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <PreviousNext nextLink="/guidelines" />
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
    width: 100%;
  }
`;
