require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag') // Dependency of 'apollo-server'
const mongoose = require('mongoose')

// Models
const Post = require('./models/Post')
const User = require('./models/User')

// GrahQL types
const typeDefs = gql`

    type Post {
        id: ID,
        body: String!,
        createdAt: String!,
        username: String!
    }

    type Query {
        getPosts: [Post]
    }
`
// Query, Mutation, Subscription needs resolver to process logic to return the data
const resolvers = {
    Query: {
        getPosts: async () => {
            try {
                const posts = await Post.find()
                return posts
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}

// Instantiating the Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Setup the MongoDB database, and running the server
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected')
        return server.listen({port: process.env.PORT})
    }).then(res => console.log(`Server is running at ${res.url}`))