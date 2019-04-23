import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { gql } from "apollo-boost";

let results,
  variables = {},
  error;

Given("the {string} collection is empty", async function(collection) {
  try {
    await this.db.collection(collection).drop();
  } catch (e) {}
});

Given("the following {string} variables:", function(arg, { rawTable }) {
  const [keys, values] = rawTable;
  variables = {
    ...variables,
    [arg]: keys.reduce((obj, key, i) => {
      obj[key] = values[i];
      return obj;
    }, {})
  };
});

When("I send the following query:", async function(document) {
  results = await this.client
    .query({
      query: gql(document),
      variables
    })
    .catch(e => (error = e));
});

When("I send the following mutation:", async function(document) {
  results = await this.client
    .mutate({
      mutation: gql(document),
      variables
    })
    .catch(e => (error = e));
});

Then("there should be no errors", function() {
  expect(error).to.equal(undefined);
});

Then("I should receive the following data payload:", function(jsonString) {
  let expected = JSON.parse(jsonString);
  expect(results.data).to.deep.equal(expected);
});

Then("I should receive an error message {string}", function(message) {
  expect(error.message).to.equal(message);
  error = undefined;
});
