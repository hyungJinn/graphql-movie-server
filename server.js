import { ApolloServer, gql } from "apollo-server";

// GET /api/v1/tweets
// POST /api/v1/tweets
// GET /api/v1/tweet/:id

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;
// ! Non Nullable
// tweet(id: ID): Tweet
// It could be an ID or It could be a null

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
