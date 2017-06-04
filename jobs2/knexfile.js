module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/jobs2'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
