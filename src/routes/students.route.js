const router = require('express').Router();
const studentController = require('../controllers/students.controller');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const { firstName, lastName } = req.body;
    const ext = file.mimetype === 'image/jpeg' ? 'jpeg' : 'png';
    cb(null, `${new Date().toISOString()}_${firstName}_${lastName}.${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  // only accept png and jpegs
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid extension.'), false);
  }
};
const upload = multer({ storage, fileFilter });

// GET /students
router.get('/', studentController.getAll);

// GET /students/:studentId
router.get('/:studentId', studentController.get);

// POST /students/
// router.post('/', upload.single('pp'), studentController.post);
router.post('/', upload.single('pp'), studentController.post);

// PUT /students/:studentId
router.put('/:studentId', studentController.update);

// DELETE /students/:studentId
router.delete('/:studentId', studentController.remove);

module.exports = router;
