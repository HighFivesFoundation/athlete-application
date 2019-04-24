import React from "react";
import { PreviousNext } from "../PreviousNext";

export const LivingExpenses = () => {
  return (
    <section>
      <h3>Living Expenses</h3>
      <form>
        <label htmlFor="LIVING_EXPENSES">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Living Expenses category. If
          you are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="LIVING_EXPENSES" name="LIVING_EXPENSES" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext prevLink="/funding" nextLink="/funding/insurance" />
    </section>
  );
};
