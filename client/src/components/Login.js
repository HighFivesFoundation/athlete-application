import React, { useState } from "react";
import { useAuth } from "../hooks";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextInput } from "./FormComponents/TextInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login, errors } = useAuth();

  const submit = () => {
    login({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <h2>Login</h2>
      <p>Already started this process? Log in to resume your application.</p>
      {loading && <p>authorizing...</p>}
      {!loading && (
        <>
          {errors && (
            <p className="error">
              {errors[0].message.replace("GraphQL error: ", "")}
            </p>
          )}
          <TextInput
            fieldName="email address"
            value={email}
            onChange={setEmail}
            type="email"
          />
          <TextInput
            value={password}
            fieldName="password"
            onChange={setPassword}
            type="password"
          />
          <Button variant="contained" onClick={submit}>
            Login
          </Button>
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  button {
    display: block;
    margin-top: 20px;
    background-color: #e5834c;
    color: #323e48;
    font-weight: bold;
  }

  .field {
    margin-top: 15px;
    width: 100%;
  }

  p.error {
    color: tomato;
  }
`;
