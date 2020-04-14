const { buildSchema } = require('graphql');
const { classroomSchemas, classroomMutations, classroomQueries } = require('./classroom');
const { disciplineSchemas, disciplineMutations, disciplineQueries } = require('./discipline');
const { teacherSchemas, teacherMutations, teacherQueries } = require('./teacher');

module.exports = buildSchema(`
  ${classroomSchemas}
  ${disciplineSchemas}
  ${teacherSchemas}

  type Mutation {
    ${classroomMutations}
    ${disciplineMutations}
    ${teacherMutations}
  }

  type Query {
    ${classroomQueries}
    ${disciplineQueries}
    ${teacherQueries}
  }
`);
