const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const TeacherDiscipline = require('./TeacherDiscipline');

module.exports = async (teacherId) => {
  let affectedRows = 0;

  try {
    affectedRows = await TeacherDiscipline.destroy({ where: { teacherId } });
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }

  if (affectedRows === 0) {
    throw new NotFoundError('Teacher not found');
  }
};
