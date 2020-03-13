const boom = require('@hapi/boom');
const { NotFoundError } = require('../../../common/errors');
const { findClassroomById } = require('../../../services/classroom');

/**
 * @swagger
 *
 * /classrooms/{classroomId}:
 *   get:
 *     tags:
 *     - "classrooms"
 *     summary: "Find classroom by ID"
 *     description: "Returns a single classroom"
 *     operationId: "getClassroomById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "classroomId"
 *       in: "path"
 *       description: "ID of classroom to return"
 *       required: true
 *       type: "string"
 *       format: "uuid"
 *     responses:
 *       200:
 *         description: "OK"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/ClassroomResponse"
 *       400:
 *         description: "Invalid ID"
 *       404:
 *         description: "Not found"
*/


module.exports = async (req, res, next) => {
  try {
    const { classroomId } = req.params;
    const payload = await findClassroomById(classroomId);
    res.json(payload);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(boom.notFound(error.message));
    } else {
      next(error);
    }
  }
};
