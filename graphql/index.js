const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        password: String!
        createdAt: String!
    }

    input RegisterInput {
        username: String!,
        password: String!,
        confirmPassword: String!,
        email: String!
    }

    type Post {
        id: ID,
        body: String!,
        createdAt: String!,
        username: String!
    }

    type Query {
        getPosts: [Post]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
    }
`