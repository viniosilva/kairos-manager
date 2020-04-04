const defaultConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'kairos_manager',
  username: process.env.DB_USERNAME || 'kairos',
  password: process.env.DB_PASSWORD || 'manager',
  dialect: 'postgres',
};

// istanbul ignore next
if (!process.env.ENV) {
  process.env.ENV = 'development';
}

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
