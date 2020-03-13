const boom = require('@hapi/boom');
const { NotFoundError } = require('../../../common/errors');
const { destroyClassroom } = require('../../../services/classroom');

/**
 * @swagger
 *
 * /classrooms:
 *   delete:
 *     tags:
 *     - "classrooms"
 *     summary: "Destroy a classroom"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "classroomId"
 *       in: "path"
 *       description: "ID of classroom to return"
 *       required: true
 *       type: "integer"
 *       format: "uuid"
 *     responses:
 *       204:
 *         description: "Success"
 *       400:
 *         description: "Invalid input"
 *       404:
 *         description: "Not found"
*/

module.exports = async (req, res, next) => {
  try {
    const { classroomId } = req.params;
    await destroyClassroom(classroomId);
    res.sendStatus(204);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(boom.notFound(error.message));
    } else {
      next(error);
    }
  }
};
