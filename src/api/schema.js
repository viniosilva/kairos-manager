const { buildSchema } = require('graphql');
const { teacherSchemas, teacherMutations, teacherQueries } = require('./teacher');

module.exports = buildSchema(`
  ${teacherSchemas}
  
  type Query {
    ${teacherQueries}
  }

  type Mutation {
    ${teacherMutations}
  }
`);
