const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Routes
const studentsRoute = require('./src/routes/students.route');

// Middleware
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentsRoute);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found.');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server started at port ${PORT}`);
});
