const { updateClassroom } = require('../../entities/classroom');

module.exports = (classroomId, payload) => updateClassroom(classroomId, payload);
