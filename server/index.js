const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const development = process.env.NODE_DEV;

const clientPath = path.join(__dirname, '../client/build');

// Routes
const studentsRoute = require('./src/routes/students.route');

// Middleware
if (development) {
  app.use(morgan('dev'));
}

app.use(express.static(clientPath));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentsRoute);

if (!development) {
  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.join(clientPath, 'index.html'));
  });
}

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

const port = process.env.PORT || 3001;
// const host = '0.0.0.0';

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
