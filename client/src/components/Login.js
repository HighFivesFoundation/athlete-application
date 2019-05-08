import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "../hooks";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextInput } from "./FormComponents/TextInput";

const AUTHORIZE_MUTATION = gql`
  mutation authorize($email: String!, $password: String!) {
    authorize(email: $email, password: $password) {
      token
      user {
        name {
          first
          last
        }
      }
    }
  }
`;

export const Login = ({ login }) => {
  const [{ data, loading, errors }, authorize] = useMutation(
    AUTHORIZE_MUTATION
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (data && data.authorize.token) {
    login(data.authorize.token);
  }

  const submit = () => {
    authorize({
      variables: { email, password }
    });
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
          {errors && <p>{errors[0].message}</p>}
          <TextInput fieldName="email" onChange={setEmail} type="email" />
          <TextInput
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
};

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
`;
