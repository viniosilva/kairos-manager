const express = require('express');
const {
  createClassroom,
  destroyClassroom,
  findAllClassrooms,
  findClassroomById,
  updateClassroom,
} = require('../controllers/classroom');
const {
  formatClassroom,
  validateClassroomId,
} = require('../middlewares/classroom');

/**
 * @swagger
 *
 * tags:
 * - name: "classrooms"
 *   description: "Everything about school classrooms"
 */

module.exports = express.Router()
  .post('/', [formatClassroom], createClassroom)
  .delete('/:classroomId', [validateClassroomId], destroyClassroom)
  .get('/', findAllClassrooms)
  .get('/:classroomId', [validateClassroomId], findClassroomById)
  .put('/:classroomId', [validateClassroomId, formatClassroom], updateClassroom);
