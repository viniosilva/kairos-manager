const { Teacher } = require('../../../src/entities/teacher');
const requestGraphQL = require('../requestGraphQL');

const teachersFixture = [{
  fullName: 'Fulano de Tal',
  document: '23615770030',
}, {
  fullName: 'Tal de Fulano',
  document: '99384567332',
}, {
  fullName: 'Tal de Ciclano',
  document: '32145678843',
}, {
  fullName: 'Ciclano de Tal',
  document: '123468784332',
}];

describe('Teachers List Query', () => {
  afterEach(async () => {
    await Teacher.destroy({ where: {} });
  });

  it('should return teachers list', async () => {
    await Promise.all(teachersFixture.map((fixture) => Teacher.create(fixture)));

    const res = await requestGraphQL().send({
      query: `{
        teachersList {
          id
        }
      }`,
    });

    expect(res.body.data.teachersList).toHaveLength(4);
  });

  it('should return two teachers', async () => {
    await Promise.all(teachersFixture.map((fixture) => Teacher.create(fixture)));

    const res = await requestGraphQL().send({
      query: `{
        teachersList(pageSize: 2) {
          id
        }
      }`,
    });

    expect(res.body.data.teachersList).toHaveLength(2);
  });
});
