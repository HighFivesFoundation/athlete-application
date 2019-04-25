import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "../hooks";
import styled from "styled-components";

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
      <p>Already started this process? Let's find your application.</p>
      {loading && <p>authorizing...</p>}
      {!loading && (
        <>
          {errors && <p>{errors[0].message}</p>}
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
          <button onClick={submit}>Login</button>
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
