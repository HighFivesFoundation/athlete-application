import React from "react";
import { useAuth } from "../hooks";
import { Router } from "@reach/router";
import { Header } from "./Header";
import { Auth } from "./Auth";
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
import { Progress } from "./Progress";
import styled, { createGlobalStyle } from "styled-components";

export default function App() {
  const { authorized } = useAuth();

  return (
    <section>
      <GlobalStyle />
      <Header />
      {!authorized ? (
        <Auth />
      ) : (
        <Container>
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
          <Progress />
        </Container>
      )}
    </section>
  );
}

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root,
  #root>section {
    font-family: Arial;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
  }

  textarea {
    width: 70%;
    margin-top: 10px;
  }

  fieldset {
    border: 1px solid white;
    input {
      display: inline-block;
    }
  }

  h1, h2, h3, p, a {
    padding-left: 5px;
  }

  .breadcrumbs {
    padding-top: 15px;
  }

  .breadcrumbs a {
    padding: 5px;
  }

  .links {
    margin-left: 50%;
    font-weight: bold;

  }

  form {
    padding: 1.5em;
    label {
      font-weight: bold;
    }
  }

  input {
    margin-top: 0.5em;
    margin-bottom: 1em;
    width: 50%;
    height: 30px;
    border-radius: 6px;
    display: block;
  }
  select {
    margin-top: 0.5em;
    margin-bottom: 1em;
    width: 50%;
    height: 30px;
    border-radius: 6px;
    display: block;
  }

`;

const Container = styled.div`
  display: flex;
  div {
    flex-basis: 75%;
  }
  aside {
    flex-basis: 25%;
  }
`;
