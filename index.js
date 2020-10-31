// Imports
require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

// GrahQL Setup
const typeDefs = require('./graphql') // Types that GraphQL will be using
const resolvers = require('./graphql/resolvers') // Query, Mutation, Subscription needs resolver to process logic to return the data

// Instantiating the Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }) // Gives access to the req object (res is also available)
})

// Setup the MongoDB database, and running the server
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected')
        return server.listen({port: process.env.PORT})
    }).then(res => console.log(`Server is running at ${res.url}`))