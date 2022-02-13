import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { buildSubgraphSchema } from "@apollo/subgraph";
import express from "express";
import http from "http";

export const startApolloServer = async (typeDefs, resolvers, dataSources) => {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    dataSources: () => {
      return { ...dataSources };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema,
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4001 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
};
