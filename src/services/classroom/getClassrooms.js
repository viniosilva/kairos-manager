const formatClassroomResponse = require('./formatClassroomResponse');
const { getClassrooms } = require('../../entities/classroom');
const { queries } = require('../../config');

module.exports = async (page, pageSize) => {
  const limit = pageSize || queries.limit;
  const offset = page || queries.offset;

  const classrooms = await getClassrooms(limit, offset);
  const formatedClassrooms = classrooms.map((classroom) => formatClassroomResponse(classroom));

  return formatedClassrooms;
};
