const Classroom = require('./Classroom');
const { NotFoundError } = require('../../common/errors');

module.exports = async (id) => {
  const classroom = await Classroom.findByPk(id);

  if (!classroom) {
    throw new NotFoundError('Classroom not found');
  }

  return classroom;
};
