import React from "react";
import { PreviousNext } from "../PreviousNext";

export const Guidelines = () => {
  return (
    <section>
      <h2>Guidelines</h2>
      <form>
        <label htmlFor="usOrCanadaResident">
          Are you a resident of the US or Canada?
        </label>
        <select id="usOrCanadaResident" name="usOrCanadaResident">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <label htmlFor="degenerativeDisease">
          Is your condition the result of a degenerative disease?
        </label>
        <select id="degenerativeDisease" name="degenerativeDisease">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <label htmlFor="healthCoverage">
          Do you have current and up to date health care coverage?
        </label>
        <select id="healthCoverage" name="healthCoverage">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <label htmlFor="returnToSports">
          Do you possess a desire to return to, or begin pursuing, a mountain
          action sports dream after having suffered a life-altering injury?
        </label>
        <select id="returnToSports" name="returnToSports">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <PreviousNext prevLink="/" nextLink="/injury-info" />
      </form>
    </section>
  );
};
