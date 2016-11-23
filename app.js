const express = require('express');
const app = express();
const path = require('path');
const port = process.argv[2] || 3000;
app.use('/', express.static(path.join(__dirname, 'dist')));
app.listen(port);

console.log('Server running on port', port, '!!');