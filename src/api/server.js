const express = require('express');
const helmet = require('helmet');
const graphqlHTTP = require('express-graphql');
const healthcheck = require('./healthcheck');
const resolvers = require('./resolvers');
const schema = require('./schema');

const port = process.env.PORT || 4000;
const app = express()
  .use(helmet())
  .get('/healthcheck', healthcheck)
  .use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }));

// istanbul ignore next
exports.start = () => app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});

exports.app = app;
