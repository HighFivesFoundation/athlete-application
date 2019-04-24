import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Travel = () => {
  return (
    <section>
      <h3>Travel</h3>
      <form>
        <label htmlFor="TRAVEL">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Travel category. If you are
          not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="TRAVEL" name="TRAVEL" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext prevLink="/funding/health" nextLink="/personal-info" />
    </section>
  );
};
