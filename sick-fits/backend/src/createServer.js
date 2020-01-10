const { GraphQLServer } = require('graphql-yoga');

const Mutation= require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga Server)

function createServer(){
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions:{
      requireResolversForResolveType: false
    },
    // make sure that not just anyone will access
    context: req => ({ ...req,db })
  });
}

module.exports = createServer;
