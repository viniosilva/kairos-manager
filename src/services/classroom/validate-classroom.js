const { Classroom } = require('../../entities/classroom');

module.exports = (payload) => Classroom.validate(payload);
