const formatClassroom = require('./formatClassroom');
const validateClassroomId = require('./validateClassroomId');

/**
 * @swagger
 *
 * definitions:
 *   ClassroomResponse:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "string"
 *         format: "uuid"
 *       name:
 *         type: "string"
 *         example: "A"
 *       grade:
 *         type: "integer"
 *         format: "int32"
 *         example: 1
 *       degree:
 *         type: "integer"
 *         format: "int32"
 *         example: 1
*/

module.exports = {
  formatClassroom,
  validateClassroomId,
};
