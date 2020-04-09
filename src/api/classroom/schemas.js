module.exports = `
  input ClassroomInput {
    name: String!
    degree: Int!
    grade: Int!
  }

  type Classroom {
    id: ID!
    name: String!
    degree: Int!
    grade: Int!
  }
`;
