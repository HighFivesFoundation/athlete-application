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

const _setToken = token =>
  token
    ? window.localStorage.setItem("token", token)
    : window.localStorage.removeItem("token");

export default function() {
  const token = window.localStorage.getItem("token");
  const { client, loading, data, errors = [] } = useQuery(ME_QUERY);
  const [
    newAccount,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_ACCOUNT_MUTATION);

  return {
    loading: loading || mutationLoading,
    me: data && data.me,
    errors: errors.length ? errors : mutationError ? [mutationError] : null,
    authorized: data && data.me && token && (token.length > 20 ? true : false),
    async createAccount({ email, password, first, last }) {
      try {
        const { data } = await newAccount({
          variables: { newApplicant: { email, password, first, last } }
        });
        _setToken(token);
        _setUser(client, data.createAccount.user);
      } catch (error) {}
    },
    login(token) {
      _setToken(token);
    },
    logout() {
      _setToken(null);
      _setUser(client, null);
    }
  };
}
