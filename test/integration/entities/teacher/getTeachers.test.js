const { Teacher, getTeachers } = require('../../../../src/entities/teacher');

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

describe('Teacher Entity', () => {
  describe('Get Teachers', () => {
    afterEach(async () => {
      await Teacher.destroy({ where: {} });
    });
    it('should return teacher list', async () => {
      await Promise.all(teachersFixture.map((fixture) => Teacher.create(fixture)));

      const teachers = await getTeachers();

      expect(teachers).toHaveLength(4);
    });

    it('should return empty teacher list', async () => {
      const teachers = await getTeachers();

      expect(teachers).toHaveLength(0);
    });

    it('should return only one teacher', async () => {
      await Promise.all(teachersFixture.map((fixture) => Teacher.create(fixture)));

      const limit = 1;
      const teachers = await getTeachers(limit);

      expect(teachers).toHaveLength(1);
    });

    it('should return only second teacher', async () => {
      await Teacher.create(teachersFixture[0]);
      await Teacher.create(teachersFixture[1]);

      const limit = 1;
      const offset = 1;
      const teachers = await getTeachers(limit, offset);

      expect(teachers[0].document).toEqual('99384567332');
    });

    it('should throw an error', async () => {
      const limit = -1;

      try {
        await getTeachers(limit);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('LIMIT must not be negative');
      }
    });
  });
});
