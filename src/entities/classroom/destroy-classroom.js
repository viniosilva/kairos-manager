const Classroom = require('./model');

module.exports = async (id) => {
  const rows = await Classroom.destroy({ where: { id } });

  if (rows === 0) {
    throw new Error('Classroom not found');
  }
};
