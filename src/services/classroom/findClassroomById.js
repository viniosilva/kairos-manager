const Classroom = require('../../entities/classroom');

module.exports = (classroomId) => Classroom.findClassroomById(classroomId);
