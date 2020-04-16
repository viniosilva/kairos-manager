const { getSequelizeErrors } = require('../../database/common');
const TeacherDiscipline = require('./TeacherDiscipline');

module.exports = async (teacherId, disciplineIds) => {
  try {
    const payload = disciplineIds.map((disciplineId) => ({ teacherId, disciplineId }));

    await TeacherDiscipline.bulkCreate(payload);
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }
};
