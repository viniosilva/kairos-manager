module.exports = `
  createClassroom(input: ClassroomInput): Classroom!
  destroyClassroom(id: ID!): String!
  updateClassroom(id: ID!, input: ClassroomInput): Classroom!
`;
