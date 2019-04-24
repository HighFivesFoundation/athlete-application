import React from "react";
import { PreviousNext } from "../PreviousNext";

export const HealingNetwork = () => {
  return (
    <section>
      <h3>Healing Network</h3>
      <form>
        <label htmlFor="HEALING_NETWORK">
          If applicable, please provide a detailed description of any resources
          you wish to pursue funding for within the Healing Network category. If
          you are not requesting funds for this category, just enter N/A:
        </label>
        <br />
        <textarea rows="8" id="HEALING_NETWORK" name="HEALING_NETWORK" />
        <br />
        <label htmlFor="amount">
          What is the total dollar amount being requested for this category?
        </label>
        <br />
        <input type="number" name="amount" id="amount" />
      </form>
      <PreviousNext
        prevLink="/circumstances"
        nextLink="/funding/living-expenses"
      />
    </section>
  );
};
