import { gql} from "apollo-server-azure-functions";
export const typeDefs =gql`
  type Query {
    authors(query: String): [Author!]!
    books: [Book!]!
    reviews: [Review!]!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    reviews: [Review!]!
  }

  type Review {
    id: ID!
    text: String!
    book: Book!
  }
`