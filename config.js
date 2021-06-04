// Database Configuration

const PGP = require("pg-promise")();
const Connection = "postgresql://postgres:qqqrwqeqwqeqS6@localhost:5432/express_db";
const db = PGP(Connection);

module.exports = db;