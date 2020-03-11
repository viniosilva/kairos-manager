const boom = require('@hapi/boom');
const { NotFoundError } = require('../../../common/errors');
const { findClassroomById } = require('../../../services/classroom');

module.exports = async (req, res, next) => {
  try {
    const { classroomId } = req.params;
    const payload = await findClassroomById(classroomId);
    res.json(payload);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(boom.notFound(error.message));
    } else {
      console.log(error);
      throw error;
    }
  }
};
