const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
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
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID!): User
}
`


module.exports = typeDefs;

