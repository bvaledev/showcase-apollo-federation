import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { buildSubgraphSchema } from "@apollo/subgraph";

export const startApolloServer = async (typeDefs, resolvers, dataSources) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs,
      resolvers,
    }),
    introspection: true,
    dataSources: () => dataSources,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4002 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4002${server.graphqlPath}`);
};
