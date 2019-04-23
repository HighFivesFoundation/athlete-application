import React from "react";
import { PreviousNext } from "./PreviousNext";

export const ICU = () => {
  return (
    <section>
      <h1>ICU</h1>
      <PreviousNext prevLink="/injury-info" nextLink="/funding" />
    </section>
  );
};
