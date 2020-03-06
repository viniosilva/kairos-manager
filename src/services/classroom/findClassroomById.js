const { findClassroomById } = require('../../entities/classroom');

module.exports = (classroomId) => findClassroomById(classroomId);
