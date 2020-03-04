const Classroom = require('./Classroom');

module.exports = (offset, limit) => Classroom.findAll({ offset, limit });
