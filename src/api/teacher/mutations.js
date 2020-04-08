module.exports = `
  createTeacher(input: TeacherInput): Teacher!
  destroyTeacher(id: ID!): String!
  updateTeacher(id: ID!, input: TeacherInput): Teacher!
`;
