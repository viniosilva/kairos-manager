const Classroom = require('../../entities/classroom');

module.exports = async (classroomId) => Classroom.findClassroomById(classroomId);
