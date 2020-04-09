const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Classroom = require('./Classroom');

module.exports = async (classroomId, payload) => {
  const options = {
    where: { id: classroomId },
    returning: true,
  };

  let affectedRows = 0;
  let classrooms;

  try {
    [affectedRows, classrooms] = await Classroom.update(payload, options);
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }

  if (affectedRows === 0) {
    throw new NotFoundError('Classroom not found');
  }

  return classrooms[0];
};
