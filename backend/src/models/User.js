const { query } = require("../config/postgresql");

class User {
  static async create(username, email, passwordHash) {
    const res = await query(
      "INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3) RETURNING id, username, email, created_at",
      [username, email, passwordHash]
    );
    return res.rows[0];
  }

  static async findByEmail(email) {
    const res = await query("SELECT * FROM users WHERE email = $1", [email]);
    return res.rows[0];
  }

  static async findById(id) {
    const res = await query("SELECT id, username, email, created_at FROM users WHERE id = $1", [id]);
    return res.rows[0];
  }

  static async update(id, username, email) {
    const res = await query(
      "UPDATE users SET username = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING id, username, email, updated_at",
      [username, email, id]
    );
    return res.rows[0];
  }

  static async delete(id) {
    const res = await query("DELETE FROM users WHERE id = $1 RETURNING id", [id]);
    return res.rows[0];
  }
}

module.exports = User;
