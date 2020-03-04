const Classroom = require('../../entities/classroom');

module.exports = (classroomId) => Classroom.destroyClassroom(classroomId);
