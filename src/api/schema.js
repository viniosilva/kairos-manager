const { buildSchema } = require('graphql');
const { classroomSchemas, classroomMutations, classroomQueries } = require('./classroom');
const { teacherSchemas, teacherMutations, teacherQueries } = require('./teacher');

module.exports = buildSchema(`
  ${classroomSchemas}
  ${teacherSchemas}

  type Mutation {
    ${classroomMutations}
    ${teacherMutations}
  }

  type Query {
    ${classroomQueries}
    ${teacherQueries}
  }
`);
