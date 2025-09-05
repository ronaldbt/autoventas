require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'autoventas_user',
    password: process.env.DB_PASSWORD || 'autoventas_pass',
    database: process.env.DB_NAME || 'autoventas360',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: process.env.DB_USER || 'autoventas_user',
    password: process.env.DB_PASSWORD || 'autoventas_pass',
    database: process.env.DB_NAME_TEST || 'autoventas360_test',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  }
};
