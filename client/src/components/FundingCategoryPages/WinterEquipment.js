import React from "react";
import { PreviousNext } from "../PreviousNext";

export const WinterEquipment = () => {
  return (
    <section>
      <h3>Winter Equipment</h3>
      <form>
        <label htmlFor="WINTER_EQUIPMENT">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Winter Equipment category.
          If you are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="WINTER_EQUIPMENT" name="WINTER_EQUIPMENT" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext
        prevLink="/funding/adaptive-equipment"
        nextLink="/funding/programs"
      />
    </section>
  );
};
