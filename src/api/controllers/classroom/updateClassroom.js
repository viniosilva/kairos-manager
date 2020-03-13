const boom = require('@hapi/boom');
const { NotFoundError } = require('../../../common/errors');
const { updateClassroom } = require('../../../services/classroom');

/**
 * @swagger
 *
 * /classrooms/{classroomId}:
 *   put:
 *     tags:
 *     - "classrooms"
 *     summary: "Update an existing classroom"
 *     description: "Returns updated classroom"
 *     operationId: "updateClassroom"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "classroomId"
 *       in: "path"
 *       description: "ID of classroom to return"
 *       required: true
 *       type: "string"
 *       format: "uuid"
 *     - in: "body"
 *       name: "body"
 *       description: "Classroom object that needs to be updated to the school"
 *       required: true
 *       schema:
 *         $ref: '#/definitions/Classroom'
 *     responses:
 *       200:
 *         description: "OK"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/ClassroomResponse"
 *       400:
 *         description: "Invalid input"
 *       404:
 *         description: "Not found"
*/

module.exports = async (req, res, next) => {
  try {
    const { classroomId } = req.params;
    const payload = await updateClassroom(classroomId, req.body);
    res.json(payload);
  } catch (error) {
    if (error instanceof NotFoundError) {
      next(boom.notFound(error.message));
    } else {
      next(error);
    }
  }
};
