const boom = require('@hapi/boom');
const { ValidateError } = require('../../../common/errors');
const { formatClassroom } = require('../../../services/classroom');

/**
 * @swagger
 *
 * definitions:
 *   Classroom:
 *     type: "object"
 *     required:
 *       - name
 *       - grade
 *       - degree
 *     properties:
 *       name:
 *         type: "string"
 *         minLength: 1
 *         maxLength: 20
 *       grade:
 *         type: "integer"
 *         format: "int32"
 *         minimun: 1
 *         maximum: 100
 *       degree:
 *         type: "integer"
 *         format: "int32"
 *         minimun: 1
 *         maximum: 100
*/

module.exports = async (req, _res, next) => {
  try {
    req.body = await formatClassroom(req.body);
    next();
  } catch (error) {
    if (error instanceof ValidateError) {
      next(boom.badRequest(error.message));
    } else {
      next(error);
    }
  }
};
