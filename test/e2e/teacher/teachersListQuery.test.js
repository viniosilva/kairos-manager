const { Teacher } = require('../../../src/entities/teacher');
const requestGraphQL = require('../requestGraphQL');

const teachersFixture = [{
  fullName: 'Test1',
  document: '11111111111',
}, {
  fullName: 'Test2',
  document: '22222222222',
}, {
  fullName: 'Test3',
  document: '33333333333',
}, {
  fullName: 'Test4',
  document: '44444444444',
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
