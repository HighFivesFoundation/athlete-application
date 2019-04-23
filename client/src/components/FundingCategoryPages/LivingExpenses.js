import React from "react";
import { PreviousNext } from "../PreviousNext";

export const LivingExpenses = () => {
  return (
    <section>
      <h2>Living Expenses</h2>
      <PreviousNext prevLink="/funding" nextLink="/funding/insurance" />
    </section>
  );
};
