import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ME_QUERY = gql`
  query {
    me {
      email
      name {
        first
        last
      }
    }
  }
`;

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

export default function() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const { loading, data, errors = [] } = useQuery(ME_QUERY);
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
    authorized: token && token.length > 20 ? true : false,
    async createAccount({ email, password, first, last }) {
      console.log(email, password, first, last);

      const { data } = await newAccount({
        variables: { newApplicant: { email, password, first, last } }
      });

      console.log("Mutation Success ", email, password, first, last);
      console.log(data.createAccount);

      //
      // 1 - When we get a response, log the user in
      //
      // if (data && data.createAccount.token) {
      //   login(data.createAccount.token, data.createAccount.user);
      // }
    },
    login(token, me) {
      setToken(token);
    },
    logout() {
      setToken(null);
    }
  };
}
