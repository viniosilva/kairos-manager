const { validateConnection } = require('../services/database');

module.exports = async (_req, res) => {
  try {
    await validateConnection();
    res.json({ status: 'It\'s all OK' });
  } catch (error) {
    res.status(500).json({ status: 'Internal Server Error' });
  }
};
