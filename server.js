const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schemaRaw = fs.readFileSync('./schema.graphql', 'utf-8')
const schema = buildSchema(schemaRaw)

const root = { hello: () => 'Hello world!' };

const GRAPHQL_PORT = 4000;

const graphQLServer = express();
graphQLServer.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  pretty: true,
}));
graphQLServer.listen(GRAPHQL_PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`)
});
