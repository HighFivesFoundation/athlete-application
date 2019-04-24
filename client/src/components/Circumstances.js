import React from "react";
import { PreviousNext } from "./PreviousNext";

export const Circumstances = () => {
  return (
    <section>
      <h2>Circumstances of Life Altering Injury</h2>
      <form>
        <label htmlFor="participatingInSport">
          Did you experience your injury while pursuing a dream in the mountain
          action sports community within the past 15 years?
        </label>
        <select id="participatingInSport" name="participatingInSport">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <PreviousNext prevLink="/icu" nextLink="/funding" />
      </form>
    </section>
  );
};
