import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Insurance = () => {
  return (
    <section>
      <h3>Insurance</h3>
      <form>
        <label htmlFor="INSURANCE">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Insurance category. If you
          are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="INSURANCE" name="INSURANCE" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext
        prevLink="/funding/living-expenses"
        nextLink="/funding/adaptive-equipment"
      />
    </section>
  );
};
