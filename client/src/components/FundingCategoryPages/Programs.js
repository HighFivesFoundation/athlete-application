import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Programs = () => {
  return (
    <section>
      <h3>Programs</h3>
      <form>
        <label htmlFor="PROGRAMS">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Programs category. If you
          are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="PROGRAMS" name="PROGRAMS" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext
        prevLink="/funding/winter-equipment"
        nextLink="/funding/health"
      />
    </section>
  );
};
