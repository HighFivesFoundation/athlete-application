import React from "react";
import { PreviousNext } from "../PreviousNext";

export const AdaptiveEquipment = () => {
  return (
    <section>
      <h2>Adaptive Equipment</h2>
      <PreviousNext
        prevLink="/funding/insurance"
        nextLink="/funding/winter-equipment"
      />
    </section>
  );
};
