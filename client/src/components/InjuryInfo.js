import React from "react";
import { PreviousNext } from "./PreviousNext";

export const InjuryInfo = () => {
  return (
    <section>
      <h1>InjuryInfo</h1>
      <PreviousNext prevLink="/guidelines" nextLink="/icu" />
    </section>
  );
};
