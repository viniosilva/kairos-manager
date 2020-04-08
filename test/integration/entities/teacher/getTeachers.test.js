const { Teacher, getTeachers } = require('../../../../src/entities/teacher');

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

      expect(teachers[0].document).toEqual('22222222222');
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
