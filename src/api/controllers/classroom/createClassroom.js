const { createClassroom } = require('../../../services/classroom');

/**
 * @swagger
 *
 * /classrooms:
 *   post:
 *     tags:
 *     - "classrooms"
 *     summary: "Add a new classroom in the school"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Classroom object that needs to be added to the school"
 *       required: true
 *       schema:
 *         $ref: '#/definitions/Classroom'
 *     responses:
 *       201:
 *         description: "Created"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/ClassroomResponse"
 *       400:
 *         description: "Invalid input"
*/

module.exports = async (req, res, next) => {
  try {
    const payload = await createClassroom(req.body);
    res.status(201).json(payload);
  } catch (error) {
    next(error);
  }
};
