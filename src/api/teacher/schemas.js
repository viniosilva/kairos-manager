module.exports = `
  input TeacherInput {
    fullName: String!
    document: String!
  }

  type Teacher {
    id: ID!
    fullName: String!
    document: String!
  }
`;
