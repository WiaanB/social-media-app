// Imports
require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const express = require('express')

const app = express()
app.use('/', express.static('build'))

// GrahQL Setup
const typeDefs = require('./graphql') // Types that GraphQL will be using
const resolvers = require('./graphql/resolvers') // Query, Mutation, Subscription needs resolver to process logic to return the data

// Instantiating the Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }) // Gives access to the req object (res is also available)
})

server.applyMiddleware({ app })

// Setup the MongoDB database, and running the server
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected')
        app.listen({ port: process.env.SERVER_PORT }, () =>
            console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
      )
    })