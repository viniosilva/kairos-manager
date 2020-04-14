module.exports = `
  createDiscipline(input: DisciplineInput): Discipline!
  destroyDiscipline(id: ID!): String!
  updateDiscipline(id: ID!, input: DisciplineInput): Discipline!
`;
