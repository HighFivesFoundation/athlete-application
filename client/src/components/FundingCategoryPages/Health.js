import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Health = () => {
  return (
    <section>
      <h3>Health</h3>
      <form>
        <label htmlFor="HEALTH">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Health category. If you are
          not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="HEALTH" name="HEALTH" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext prevLink="/funding/programs" nextLink="/funding/travel" />
    </section>
  );
};
