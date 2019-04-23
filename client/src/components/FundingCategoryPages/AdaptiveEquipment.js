import React from "react";
import { PreviousNext } from "../PreviousNext";

export const AdaptiveEquipment = () => {
  return (
    <section>
      <h3>Adaptive Equipment</h3>
      <PreviousNext
        prevLink="/funding/insurance"
        nextLink="/funding/winter-equipment"
      />
    </section>
  );
};
