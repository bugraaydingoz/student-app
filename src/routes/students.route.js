const router = require('express').Router();

// GET /students
router.get('/', (req, res, next) => {
  res.json({ message: 'works' });
});

// GET /students/:studentId
router.get('/:studentId', (req, res, next) => {
  res.json({ message: 'works' });
});

// POST /students/:studentId
router.post('/:studentId', (req, res, next) => {
  res.json({ message: 'works' });
});

// PUT /students/:studentId
router.PUT('/:studentId', (req, res, next) => {
  res.json({ message: 'works' });
});

// DELETE /students/:studentId
router.delete('/:studentId', (req, res, next) => {
  res.json({ message: 'works' });
});

module.exports = router;
