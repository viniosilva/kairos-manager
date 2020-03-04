const Classroom = require('./Classroom');

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
      error.message = 'Classroom not found';
    }

    throw error;
  }
};
