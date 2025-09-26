const fs = require('fs');
const path = require('path');
const { query } = require('../config/postgresql');

const initializeDatabase = async () => {
  try {
    console.log('🔧 Initializing PostgreSQL database...');
    
    // Read and execute schema SQL
    const schemaPath = path.join(__dirname, '../config/postgresql_schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Split by semicolon and execute each statement
    const statements = schema.split(';').filter(stmt => stmt.trim());
    
    for (const statement of statements) {
      if (statement.trim()) {
        await query(statement);
      }
    }
    
    console.log('✅ PostgreSQL database initialized successfully!');
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  }
};

module.exports = { initializeDatabase };
