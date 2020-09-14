const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const ping = require('./queries/ping');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ping,
    },
  }),
  /*
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
    },
  }),
  */
});
