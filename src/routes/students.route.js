const router = require('express').Router();
const studentController = require('../controllers/students.controller');

// Handle file upload
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    if (file) {
      const { firstName, lastName } = req.body;
      const ext = file.mimetype === 'image/jpeg' ? 'jpeg' : 'png';
      cb(null, `${new Date().toISOString()}_${firstName}_${lastName}.${ext}`);
    }
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
const uploadAdd = multer({ storage, fileFilter });
const uploadEdit = multer({ storage });

router.get('/', studentController.getAll);
router.get('/:studentId', studentController.get);
router.post('/', uploadAdd.single('profilePicture'), studentController.post);
router.put('/:studentId', uploadEdit.single('profilePicture'), studentController.update);
router.delete('/:studentId', studentController.remove);

module.exports = router;
