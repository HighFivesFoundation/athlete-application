import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Insurance = () => {
  return (
    <section>
      <h3>Insurance</h3>
      <PreviousNext
        prevLink="/funding/living-expenses"
        nextLink="/funding/adaptive-equipment"
      />
    </section>
  );
};
