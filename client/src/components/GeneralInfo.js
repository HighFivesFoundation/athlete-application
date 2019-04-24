import React from "react";
import { PreviousNext } from "./PreviousNext";

export const GeneralInfo = () => {
  return (
    <section>
      <h2>General Info</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" />
        <label htmlFor="dateofbirth">Date of Birth</label>
        <input type="date" name="dateofbirth" id="dateofbirth" />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="state">State</label>
        <input type="text" name="state" id="state" />
        <label htmlFor="zip">Zip Code</label>
        <input type="text" name="zip" id="zip" />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
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
    </section>
  );
};
