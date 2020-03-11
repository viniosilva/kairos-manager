const boom = require('@hapi/boom');
const { NotFoundError } = require('../../../common/errors');
const { destroyClassroom } = require('../../../services/classroom');

module.exports = async (req, res, next) => {
  try {
    const { classroomId } = req.params;
    await destroyClassroom(classroomId);
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(boom.notFound(error.message));
    } else {
      throw error;
    }
  }
};
