# High Fives Foundation Athlete Application

To become a High Fives athlete, an individual must submit a grant application. In this repo, we'll build a modern, accessible form to capture all of this information.

For more information about the High Fives Foundation, please [check out their website](https://highfivesfoundation.com).

## Installation

1. Create a new Environment file: **./client/.env**
2. Add the following environment variables:

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_GRAPHQL_URI=http://localhost:4000/graphql
REACT_APP_SUBSCRIPTION_ENDPOINT=ws://localhost:4000/graphql
```

3. Install Dependencies, build React App: `npm install`
4. Run production application: `npm start`
5. GraphQL Playground: `http://localhost:4000/playground`
