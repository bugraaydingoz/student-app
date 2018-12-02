const express = require('express');
const app = express();

const students = require('./src/routes/students.route');

app.use('/api/v1/students', students);

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server started at port ${PORT}`);
});
