const { findAllClassrooms } = require('../../entities/classroom');

module.exports = (page, pageSize) => {
  const offset = page || 0;
  const limit = pageSize || 10;

  return findAllClassrooms(offset, limit);
};
