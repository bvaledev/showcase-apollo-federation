import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloGateway } from "@apollo/gateway";
import express from "express";
import http from "http";

export const startApolloGateway = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    gateway: new ApolloGateway({
      serviceList: [
        { name: "products", url: "http://localhost:4001/graphql" },
        { name: "categories", url: "http://localhost:4002/graphql" },
      ],
    }),
    subscriptions: false,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Gateway ready at http://localhost:4000${server.graphqlPath}`);
};
