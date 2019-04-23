import React from "react";
import { Router } from "@reach/router";
import { Header } from "./Header";
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
import { Progress } from "./Progress";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  div {
    flex-basis: 75%;
  }
  aside {
    flex-basis: 25%;
  }
`;

export default function App() {
  return (
    <section>
      <Header />
      <h1>Athlete Application</h1>
      <Container>
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
        <Progress />
      </Container>
    </section>
  );
}
