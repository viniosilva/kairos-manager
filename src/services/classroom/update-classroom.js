const Classroom = require('../../entities/classroom');

module.exports = async (classroomId, payload) => Classroom.updateClassroom(classroomId, payload);
