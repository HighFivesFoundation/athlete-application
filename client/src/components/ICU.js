import React from "react";
import { PreviousNext } from "./PreviousNext";

export const ICU = () => {
  return (
    <section>
      <h2>Intensive Care / In-Patient Information</h2>
      <form>
        <label htmlFor="daysInICU">
          How many days were you at the ICU? If you did not spend time in ICU,
          please enter "0".
        </label>
        <input type="number" name="daysInICU" id="daysInICU" />
        <label htmlFor="nameOfHospital">Name of ICU Hospital</label>
        <input type="text" name="nameOfHospital" id="nameOfHospital" />
        <label htmlFor="daysInInpatientRehab">
          How many days were you in in-patient rehab? If you did not spend time
          in in-patient rehab, please enter "0".
        </label>
        <input
          type="number"
          name="daysInInpatientRehab"
          id="daysInInpatientRehab"
        />
        <label htmlFor="nameOfRehabHospital">Name of Rehab Hospital</label>
        <input
          type="text"
          name="nameOfRehabHospital"
          id="nameOfRehabHospital"
        />
        <PreviousNext prevLink="/injury-info" nextLink="/circumstances" />
      </form>
    </section>
  );
};
