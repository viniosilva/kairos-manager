const defaultConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'kairos_manager',
  username: process.env.DB_USERNAME || 'kairos',
  password: process.env.DB_PASSWORD || 'manager',
  dialect: 'postgres',
};

const config = {
  development: defaultConfig,
  staging: {
    ...defaultConfig,
    pool: {
      max: 2,
      min: 0,
    },
  },
  production: {
    ...defaultConfig,
    pool: {
      max: 2,
      min: 0,
    },
  },
};

module.exports = () => {
  const env = process.env.ENV ? process.env.ENV : 'development';

  return config[env];
};
