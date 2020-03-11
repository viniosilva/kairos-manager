const { findAllClassrooms } = require('../../../services/classroom');

module.exports = async (req, res) => {
  const { page, pageSize } = req.query;

  const payload = await findAllClassrooms(page, pageSize);
  res.json(payload);
};
