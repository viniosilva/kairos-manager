const Classroom = require('./model');

module.exports = async (id) => {
  const classroom = await Classroom.findByPk(id);

  if (!classroom) {
    throw new Error('Classroom not found');
  }

  return classroom;
};
