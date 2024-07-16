import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getAllProjects } from "./src/services/project.js";
import typeDefs from "./schema.js";
const resolvers = {
    Query: {
        projects: () => getAllProjects(),
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.PORT) || 4000 },
});
