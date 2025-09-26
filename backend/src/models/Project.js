const { query } = require("../config/postgresql");

class Project {
  static async create(userId, name, description) {
    const res = await query(
      "INSERT INTO projects(user_id, name, description) VALUES($1, $2, $3) RETURNING id, user_id, name, description, created_at",
      [userId, name, description]
    );
    return res.rows[0];
  }

  static async findByUserId(userId) {
    const res = await query("SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC", [userId]);
    return res.rows;
  }

  static async findById(id) {
    const res = await query("SELECT * FROM projects WHERE id = $1", [id]);
    return res.rows[0];
  }

  static async update(id, name, description) {
    const res = await query(
      "UPDATE projects SET name = $1, description = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING id, name, description, updated_at",
      [name, description, id]
    );
    return res.rows[0];
  }

  static async delete(id) {
    const res = await query("DELETE FROM projects WHERE id = $1 RETURNING id", [id]);
    return res.rows[0];
  }
}

module.exports = Project;
