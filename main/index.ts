import { ApolloServer} from "apollo-server-azure-functions";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";


// Construct a schema, using GraphQL schema language
/*const typeDefs = gql`
  type Query {
    hello: String
  }
`;
*/
// Provide resolver functions for your schema fields
/*const resolvers = {
  Query: {
    hello: () => "Hello from our GraphQL backend!",
  },
};
*/

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true
});

export default server.createHandler({
  cors: {
    origin: ['*', "https://studio.apollographql.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["access-control-allow-credentials", "access-control-allow-origin", "content-type"]
  },
});