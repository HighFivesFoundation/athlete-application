import { When, Then } from "cucumber";
import { expect } from "chai";
import { gql } from "apollo-boost";

let results, error;

When("I send the following query:", async function(document) {
  results = await this.client
    .query({ query: gql(document) })
    .catch(e => (error = e));
});

Then("I should receive the following data payload:", function(jsonString) {
  let expected = JSON.parse(jsonString);
  expect(results.data).to.deep.equal(expected);
});

Then("there should be no errors", function() {
  expect(error).to.equal(undefined);
});

Then("I should receive an error message {string}", function(message) {
  expect(error.message).to.equal(message);
});
