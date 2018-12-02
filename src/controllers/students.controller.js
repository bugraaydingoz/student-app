const query = require('../utils/db.util');

const getAll = (req, res, next) => {
  query(`SELECT * FROM students`)
    .then(students => {
      const count = students.length;
      res.status(200).json({ message: 'Students were fetched.', count, students });
    })
    .catch(next);
};

const get = (req, res, next) => {
  const studentId = req.params.studentId;
  query(`SELECT * FROM students WHERE id = ${studentId}`)
    .then(student => {
      res.status(200).json({ ...student[0] });
    })
    .catch(next);
};

const post = (req, res, next) => {
  const product = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    hobbies: req.body.hobbies,
    ppLink: req.file.path,
  };

  console.log(product);

  res.status(201).json({ message: 'User was created.', product });

  //   query(`SELECT * FROM students WHERE id = ${studentId}`)
  //     .then(student => {
  //       res.status(200).json({ ...student[0] });
  //     })
  //     .catch(next);
};

const update = (req, res, next) => {
  res.json({ message: 'works' });
};

const remove = (req, res, next) => {
  res.json({ message: 'works' });
};

module.exports = {
  getAll,
  get,
  post,
  update,
  remove,
};
