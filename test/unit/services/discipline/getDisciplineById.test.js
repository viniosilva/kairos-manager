const { getDisciplineById } = require('../../../../src/services/discipline');
const { getDisciplineById: getDisciplineByIdMock } = require('../../../../src/entities/discipline');
const { NotFoundError, ValidationError } = require('../../../../src/common/errors');

jest.mock('../../../../src/entities/discipline/getDisciplineById');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Service', () => {
  describe('Get Discipline By ID', () => {
    beforeEach(() => {
      getDisciplineByIdMock.mockClear();
    });

    it('should return discipline list', async () => {
      getDisciplineByIdMock.mockReturnValueOnce(disciplineFixture);

      const discipline = await getDisciplineById('3fa85f64-5717-4562-b3fc-2c963f66afa6');

      expect(discipline.grade).toEqual(1);
    });

    it('should throw validation error', async () => {
      try {
        await getDisciplineById('1');
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });

    it('should throw not found error', async () => {
      getDisciplineByIdMock.mockRejectedValueOnce(new NotFoundError('Discipline not found'));

      try {
        await getDisciplineById('3fa85f64-5717-4562-b3fc-2c963f66afa6');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });
  });
});
