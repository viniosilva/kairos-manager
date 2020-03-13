const { findAllClassrooms } = require('../../../services/classroom');

/**
 * @swagger
 *
 * /classrooms:
 *   get:
 *     tags:
 *     - "classrooms"
 *     summary: "Get all classrooms"
 *     description: "Returns a classroom list"
 *     operationId: "getClassrooms"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "page"
 *       in: "query"
 *       type: "integer"
 *       format: "int32"
 *       default: 0
 *     - name: "pageSize"
 *       in: "query"
 *       type: "integer"
 *       format: "int32"
 *       default: 10
 *     responses:
 *       200:
 *         description: "OK"
 *         schema:
 *           type: "array"
 *           $ref: "#/definitions/ClassroomResponse"
*/


module.exports = async (req, res, next) => {
  try {
    const { page, pageSize } = req.query;

    const payload = await findAllClassrooms(page, pageSize);
    res.json(payload);
  } catch (error) {
    next(error);
  }
};
