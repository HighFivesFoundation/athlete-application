import React from "react";
import { Circumstances } from "./Circumstances";
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
import { Router } from "@reach/router";

export default function Application() {
  return (
    <Router>
      <GeneralInfo path="/" />
      <Guidelines path="/guidelines" />
      <InjuryInfo path="/injury-info" />
      <ICU path="/icu" />
      <Circumstances path="/circumstances" />
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
  );
}
