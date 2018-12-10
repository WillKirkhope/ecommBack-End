module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ecomm_boiler_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}
};
