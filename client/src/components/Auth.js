import React from "react";
import { Login } from "./Login";
import { CreateAccount } from "./CreateAccount";
import styled from "styled-components";

export const Auth = ({ login = f => f }) => {
  return (
    <Container>
      <header>
        <h1>Athlete Application</h1>
      </header>
      <div>
        <Login login={login} />
        <CreateAccount login={login} />
      </div>
    </Container>
  );
};

const Container = styled.section`
  height: calc(100% - 5em);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;

  > header {
    padding: 1em 2em 0 2em;
    h1 {
      margin: 0;
      padding: 0;
      font-size: 2em;
    }
  }

  > div {
    flex-grow: 1;
    display: flex;
    section {
      flex-grow: 1;
      border: solid 2px black;
      margin: 1.5em;
      padding: 0.5em;
      h2 {
        margin: 0;
        padding: 0;
      }
    }
  }
`;
