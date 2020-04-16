const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Classroom = require('./Classroom');

module.exports = async (classroomId) => {
  let affectedRows = 0;

  try {
    affectedRows = await Classroom.destroy({ where: { id: classroomId } });
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }

  if (affectedRows === 0) {
    throw new NotFoundError('Classroom not found');
  }
};
