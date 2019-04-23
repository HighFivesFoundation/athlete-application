import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Insurance = () => {
  return (
    <section>
      <h2>Insurance</h2>
      <PreviousNext
        prevLink="/funding/living-expenses"
        nextLink="/funding/adaptive-equipment"
      />
    </section>
  );
};
