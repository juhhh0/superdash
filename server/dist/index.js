import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addNewProject, getAllProjects } from "./src/services/project.js";
import typeDefs from "./schema.js";
const resolvers = {
    Query: {
        projects: () => getAllProjects(),
    },
    Mutation: {
        newProject: async (_, { project }) => {
            return addNewProject(project);
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
