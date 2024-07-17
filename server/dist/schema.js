const typeDefs = `#graphql
type Project {
  id: ID!
  title: String!
  description: String
}
type Query {
    projects: [Project]
}

type Mutation {
  newProject(project: NewProjectInput!): Project
}

input NewProjectInput {
  title: String!
  description: String
}
`;
export default typeDefs;
