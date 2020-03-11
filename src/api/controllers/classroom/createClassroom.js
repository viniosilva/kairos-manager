const { createClassroom } = require('../../../services/classroom');

module.exports = async (req, res) => {
  const payload = await createClassroom(req.body);
  res.status(201).json(payload);
};
