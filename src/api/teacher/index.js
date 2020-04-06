const { createTeacher } = require('../../services/teacher');
const teacherInput = require('./teacherInput');
const teacherType = require('./teacherType');

exports.teacherSchemas = [
  teacherInput,
  teacherType,
].join('');

exports.teacherQueries = `
  teacher(id: ID!): Teacher!
`;

exports.teacherMutations = `
  createTeacher(input: TeacherInput): Teacher!
`;

exports.teacherRoot = {
  createTeacher: ({ input }) => createTeacher(input),
};
