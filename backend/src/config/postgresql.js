const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const connectPostgreSQL = async () => {
  try {
    await pool.connect();
    console.log("🐘 PostgreSQL connected successfully!");
  } catch (error) {
    console.error("❌ Error connecting to PostgreSQL:", error.message);
    process.exit(1);
  }
};

module.exports = {
  query: (text, params) => pool.query(text, params),
  connectPostgreSQL,
};
