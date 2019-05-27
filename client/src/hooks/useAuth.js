import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ME_QUERY = gql`
  query {
    me {
      email
      firstName
      lastName
    }
  }
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount($newApplicant: CreateAccountInput!) {
    createAccount(newApplicant: $newApplicant) {
      token
      user {
        email
        firstName
        lastName
      }
    }
  }
`;

const _setUser = (client, me) =>
  client.writeQuery({
    query: ME_QUERY,
    data: { me }
  });

export default function() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const { client, loading, data, errors = [] } = useQuery(ME_QUERY);
  const [
    newAccount,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_ACCOUNT_MUTATION);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  });

  return {
    loading: loading || mutationLoading,
    me: data && data.me,
    errors: errors.length ? errors : mutationError ? [mutationError] : null,
    authorized: data && data.me && token && (token.length > 20 ? true : false),
    async createAccount({ email, password, first, last }) {
      const { data } = await newAccount({
        variables: { newApplicant: { email, password, first, last } }
      });
      _setUser(client, data.createAccount.user);
      setToken(data.createAccount.token);
    },
    login(token) {
      setToken(token);
    },
    logout() {
      setToken(null);
      _setUser(client, null);
    }
  };
}
