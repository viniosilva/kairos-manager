module.exports = `
  input DisciplineInput {
    name: String!
    degree: Int!
    grade: Int!
  }

  type Discipline {
    id: ID!
    name: String!
    degree: Int!
    grade: Int!
  }
`;
