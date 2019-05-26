import React, { useState } from "react";
import { useAuth } from "../hooks";
import styled from "styled-components";
import { TextInput } from "./FormComponents/TextInput";
import Button from "@material-ui/core/Button";

export const CreateAccount = () => {
  const { loading, createAccount, errors } = useAuth();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    createAccount({ email, password, first, last });
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
          <TextInput
            fieldName="first"
            value={first}
            onChange={setFirst}
            type="text"
          />
          <TextInput
            fieldName="last"
            value={last}
            onChange={setLast}
            type="text"
          />
          <TextInput
            fieldName="email"
            value={email}
            onChange={setEmail}
            type="email"
          />
          <TextInput
            fieldName="password"
            value={password}
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
