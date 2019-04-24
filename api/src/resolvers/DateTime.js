const { GraphQLScalarType } = require("graphql");

module.exports = new GraphQLScalarType({
  name: "DateTime",
  description: "A valid date time value.",
  parseValue: value => new Date(value),
  serialize: value => new Date(value).toISOString(),
  parseLiteral: ast => new Date(ast.value)
});
