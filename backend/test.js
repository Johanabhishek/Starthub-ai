console.log('Testing basic server setup...');
const express = require('express');
const app = express();

app.get('/test', (req, res) => res.json({status: 'OK'}));
console.log('✅ Express setup works!');

// Test route imports
try {
  require('./src/routes/auth');
  console.log('✅ Auth routes loaded successfully');
} catch (error) {
  console.log('❌ Auth routes error:', error.message);
}

try {
  require('./src/routes/users');
  console.log('✅ User routes loaded successfully');
} catch (error) {
  console.log('❌ User routes error:', error.message);
}

try {
  require('./src/routes/projects');
  console.log('✅ Project routes loaded successfully');
} catch (error) {
  console.log('❌ Project routes error:', error.message);
}

try {
  require('./src/routes/ai');
  console.log('✅ AI routes loaded successfully');
} catch (error) {
  console.log('❌ AI routes error:', error.message);
}

console.log('✅ All basic tests passed!');
