import React from "react";
import { Link, Router } from "@reach/router";
import { GeneralInfo } from "./GeneralInfo";
import { Guidelines } from "./Guidelines";
import { InjuryInfo } from "./InjuryInfo";
import { ICU } from "./ICU.js";
import { Funding } from "./Funding";
import {
  HealingNetwork,
  LivingExpenses,
  Insurance,
  AdaptiveEquipment,
  WinterEquipment,
  Programs,
  Health,
  Travel
} from "./FundingCategoryPages";
import { PersonalInfo } from "./PersonalInfo";

export default function App() {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guidelines">Applicant Guidelines</Link>
        <Link to="/injury-info">Injury Info</Link>
        <Link to="/icu">ICU</Link>
        <Link to="/funding">Funding Categories</Link>
      </nav>
      <h1>High Fives Athlete Application</h1>
      <Router>
        <GeneralInfo path="/" />
        <Guidelines path="/guidelines" />
        <InjuryInfo path="/injury-info" />
        <ICU path="/icu" />
        <Funding path="/funding">
          <HealingNetwork path="/" />
          <LivingExpenses path="living-expenses" />
          <Insurance path="insurance" />
          <AdaptiveEquipment path="adaptive-equipment" />
          <WinterEquipment path="winter-equipment" />
          <Programs path="programs" />
          <Health path="health" />
          <Travel path="travel" />
        </Funding>
        <PersonalInfo path="/personal-info" />
      </Router>
    </section>
  );
}
