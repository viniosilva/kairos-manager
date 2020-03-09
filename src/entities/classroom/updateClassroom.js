const Classroom = require('./Classroom');
const { NotFoundError } = require('../../common/errors');

module.exports = async (id, payload) => {
  try {
    const classroom = await Classroom.update(payload, {
      where: { id },
      returning: true,
      plain: true,
    });

    return classroom[1];
  } catch (error) {
    if (error.message === 'Cannot read property \'length\' of null') {
      throw new NotFoundError('Classroom not found');
    }

    throw error;
  }
};
