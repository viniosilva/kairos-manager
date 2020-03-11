const { NotFoundError } = require('../../common/errors');

const Classroom = require('./Classroom');

module.exports = async (id) => {
  const rows = await Classroom.destroy({ where: { id } });

  if (rows === 0) {
    throw new NotFoundError('Classroom not found');
  }
};
