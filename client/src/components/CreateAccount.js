import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "../hooks";
import styled from "styled-components";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount($newApplicant: CreateAccountInput!) {
    createAccount(newApplicant: $newApplicant) {
      token
      user {
        email
        name {
          first
          last
        }
      }
    }
  }
`;

export const CreateAccount = ({ login }) => {
  const [{ loading, errors, data }, createAccount] = useMutation(
    CREATE_ACCOUNT_MUTATION
  );

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (data && data.createAccount.token) {
    login(data.createAccount.token, data.createAccount.user);
  }

  const submit = () => {
    createAccount({
      variables: { newApplicant: { email, password, first, last } }
    });
    setFirst("");
    setLast("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <h2>Create Account</h2>
      <p>Get started with the High Fives athlete application right here.</p>
      {loading && <p>creating account</p>}
      {!loading && (
        <>
          {errors && <p>{errors[0].message}</p>}
          <label>First Name</label>
          <input
            type="text"
            value={first}
            onChange={e => setFirst(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={last}
            onChange={e => setLast(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={submit}>Create Account</button>
        </>
      )}
    </Container>
  );
};

const Container = styled.section`
  label {
    display: block;
  }
  button {
    display: block;
  }
`;
