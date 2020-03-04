const Classroom = require('./model');

module.exports = (offset, limit) => Classroom.findAll({ offset, limit });
