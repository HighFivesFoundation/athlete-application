import React from "react";
import { PreviousNext } from "../PreviousNext";

export const AdaptiveEquipment = () => {
  return (
    <section>
      <h3>Adaptive Equipment</h3>
      <form>
        <label htmlFor="ADAPTIVE_EQUIPMENT">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Adaptive Equipment category.
          If you are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="ADAPTIVE_EQUIPMENT" name="ADAPTIVE_EQUIPMENT" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext
        prevLink="/funding/insurance"
        nextLink="/funding/winter-equipment"
      />
    </section>
  );
};
