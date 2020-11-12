'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express();
const port = process.env.port || 3000

const schema = buildSchema(`
    type Query {
        hello: String
       
    }
`)

// configurar los resolvers

const resolvers = {
    hello: () => {
        return 'Hola mundo'
    }

}


app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log('Server is listening at http://localhost:${port}/api')
})



