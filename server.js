import { ApolloServer, gql } from "apollo-server-express";

GET / text;
GET / hello;

const typeDefs = gql`
  type Tweet {
    text: String
    hello: String
  }
`;

const server = new ApolloServer({});

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
