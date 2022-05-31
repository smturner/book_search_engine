const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]!
    desccription: String
    title: String
    image: String
    link: String
}

input BookInput {
    bookId: ID
    authors: [String]
    desccription: String
    title: String
    image: String
    link: String
}

type Auth {
  token: ID!
  user: User  
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password:String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: String): User
}
`

module.exports = typeDefs;

