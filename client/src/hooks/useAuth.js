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

const AUTHORIZE_MUTATION = gql`
  mutation authorize($email: String!, $password: String!) {
    authorize(email: $email, password: $password) {
      token
      user {
        email
        firstName
        lastName
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

const _setToken = token =>
  token
    ? window.localStorage.setItem("token", token)
    : window.localStorage.removeItem("token");

export default function() {
  const { client, loading, data, errors = [] } = useQuery(ME_QUERY);
  const [authorize, { loading: authLoading, error: authError }] = useMutation(
    AUTHORIZE_MUTATION
  );
  const [
    newAccount,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_ACCOUNT_MUTATION);

  const token = window.localStorage.getItem("token");

  return {
    loading: loading || mutationLoading || authLoading,
    me: data && data.me,
    errors: errors.length
      ? errors
      : mutationError
      ? [mutationError]
      : authError
      ? [authError]
      : null,
    authorized: data && data.me && token && (token.length > 20 ? true : false),
    async createAccount({ email, password, first, last }) {
      try {
        const { data } = await newAccount({
          variables: { newApplicant: { email, password, first, last } }
        });
        _setToken(data.createAccount.token);
        _setUser(client, data.createAccount.user);
      } catch (error) {}
    },
    async login({ email, password }) {
      try {
        const { data } = await authorize({
          variables: { email, password }
        });
        _setToken(data.authorize.token);
        _setUser(client, data.authorize.user);
      } catch (error) {}
    },
    logout() {
      _setToken(null);
      _setUser(client, null);
    }
  };
}
