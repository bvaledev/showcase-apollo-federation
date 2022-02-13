import { startApolloGateway } from "./apollo-server.js";

const buildApolloServer = startApolloGateway();
buildApolloServer.then(() => console.log("App started"));
