const Classroom = require('../../entities/classroom');

module.exports = (classroomId, payload) => Classroom.updateClassroom(classroomId, payload);
