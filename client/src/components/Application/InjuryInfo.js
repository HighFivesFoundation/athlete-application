import React from "react";
import { PreviousNext } from "../PreviousNext";

export const InjuryInfo = () => {
  return (
    <section>
      <h2>Injury Info</h2>
      <form>
        <label htmlFor="injuryType">Type of Injury</label>
        <select id="injuryType" name="injuryType">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="SPINAL_CORD">Spinal Cord</option>
          <option value="TBI">TBI</option>
          <option value="AMPUTATION">Amputation</option>
          <option value="OTHER">Other</option>
        </select>
        <label htmlFor="injuryLevel">
          Spinal Cord Injury Level (if applicable)
        </label>
        <select id="injuryLevel" name="injuryLevel">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="C1C7">C1 - C7</option>
          <option value="T1T6">T1 - T6</option>
          <option value="T7T12">T7 - T12</option>
          <option value="L1S1">L1 - S1</option>
        </select>
        <label htmlFor="spinalInjuryType">Type of Spinal Cord Injury</label>
        <select id="spinalInjuryType" name="spinalInjuryType">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="COMPLETEPARA">Complete Para</option>
          <option value="INCOMPLETEPARA">Incomplete Para</option>
          <option value="COMPLETETETRA">Complete Tetra</option>
          <option value="INCOMPLETETRA">Incomplete Tetra</option>
        </select>
        <label htmlFor="injuryCause">Type of Spinal Cord Injury</label>
        <select id="injuryCause" name="injuryCause">
          <option value="" selected disabled hidden>
            Select one
          </option>
          <option value="WINTERACTIONSPORT">Winter Action Sport</option>
          <option value="SUMMERACTIONSPORT">Summer Action Sport</option>
          <option value="MOTORSPORT">Motor Sport</option>
          <option value="MILITARYCOMBAT">Military Combat</option>
          <option value="CARACCIDENT">Car Accident</option>
          <option value="OTHER">Other</option>
        </select>
        <label htmlFor="injuryDescription">
          Please provide a detailed description of the extent of your injury and
          how it occurred. If you have experienced more than one life-altering
          injury, please fully describe the injuries here:
        </label>
        <br />
        <textarea rows="8" id="injuryDescription" name="injuryDescription" />
        <br />
        <label htmlFor="recoveryGoals">
          Please describe your recovery goals:
        </label>
        <br />
        <textarea rows="8" id="recoveryGoals" name="recoveryGoals" />
        <br />
        <label htmlFor="reachingRecoveryGoals">
          How can High Fives help you reach your recovery goals?
        </label>
        <br />
        <textarea
          rows="8"
          id="reachingRecoveryGoals"
          name="reachingRecoveryGoals"
        />
      </form>
      <PreviousNext prevLink="/guidelines" nextLink="/icu" />
    </section>
  );
};
