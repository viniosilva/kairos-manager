const defaultConfig = {
  host: 'localhost',
  port: 5432,
  database: 'kairos_manager',
  username: 'kairos',
  password: 'kairos_manager',
  dialect: 'postgres',
  pool: {
    max: 2,
    min: 0,
  },
};

exports.development = defaultConfig;

exports.staging = {
  ...defaultConfig,
  pool: {
    max: 2,
    min: 0,
  },
};

exports.production = {
  ...defaultConfig,
  pool: {
    max: 2,
    min: 0,
  },
};
