const typeDefs = `#graphql
type Project {
  id: ID!
  title: String!
  description: String
}
type Query {
    projects: [Project]
}
`;

export default typeDefs;
