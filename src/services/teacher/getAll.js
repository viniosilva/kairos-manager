const formatResponse = require('./formatResponse');
const { getTeachers } = require('../../entities/teacher');
const { queries } = require('../../config');

module.exports = async (page, pageSize) => {
  const limit = pageSize || queries.limit;
  const offset = page || queries.offset;

  const teachers = await getTeachers(limit, offset);
  const formatedTeachers = teachers.map((teacher) => formatResponse(teacher));

  return formatedTeachers;
};
