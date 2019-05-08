import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "../hooks";
import styled from "styled-components";
import { TextInput } from "./FormComponents/TextInput";
import Button from "@material-ui/core/Button";

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
          <TextInput fieldName="first" onChange={setFirst} type="text" />
          <TextInput fieldName="last" onChange={setLast} type="text" />
          <TextInput fieldName="email" onChange={setEmail} type="email" />
          <TextInput
            fieldName="password"
            onChange={setPassword}
            type="password"
          />
          <Button variant="contained" onClick={submit}>
            Create Account
          </Button>
        </>
      )}
    </Container>
  );
};

const Container = styled.section`
  button {
    display: block;
    margin-top: 20px;
    background-color: #62b3af;
    color: #323e48;
    font-weight: bold;
  }

  .field {
    margin-top: 15px;
    width: 100%;
  }
`;
