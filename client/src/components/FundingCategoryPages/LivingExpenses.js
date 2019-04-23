import React from "react";
import { PreviousNext } from "../PreviousNext";

export const LivingExpenses = () => {
  return (
    <section>
      <h3>Living Expenses</h3>
      <PreviousNext prevLink="/funding" nextLink="/funding/insurance" />
    </section>
  );
};
