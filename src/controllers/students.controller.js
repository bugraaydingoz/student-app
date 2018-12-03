const query = require('../utils/db.util');
const studentMapper = require('../utils/object.util');

const getAll = (req, res, next) => {
  query(`SELECT * FROM students`)
    .then(students => {
      const count = students.length;

      const _students = students.map(student => studentMapper(student, 'snake'));
      res.status(200).json({ message: 'Students were fetched.', count, students: _students });
    })
    .catch(next);
};

const get = (req, res, next) => {
  const studentId = req.params.studentId;
  query(`SELECT * FROM students WHERE id = ${studentId}`)
    .then(student => {
      const _student = studentMapper(student[0], 'snake');
      res.status(200).json({ ..._student });
    })
    .catch(next);
};

const post = (req, res, next) => {
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    hobbies: req.body.hobbies,
    ppLink: req.file.path,
  };

  query(
    `INSERT INTO students (first_name, last_name, birth_date, hobbies, pp_link) VALUES (?, ?, ?, ?, ?)`,
    Object.values(student),
  )
    .then(response => {
      const _student = { ...student, id: response.insertId };
      res.status(201).json({ message: 'Student  was created.', student: _student });
    })
    .catch(next);
};

const update = (req, res, next) => {
  const studentId = req.params.studentId;
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    hobbies: req.body.hobbies,
  };

  query(
    `UPDATE students SET first_name = ?, last_name = ?, birth_date = ?, hobbies = ? WHERE id = ?`,
    [...Object.values(student), studentId],
  )
    .then(response => {
      const _student = { ...student, id: studentId };
      res.status(201).json({ message: 'Student was updated.', student: _student });
    })
    .catch(next);
};

const remove = (req, res, next) => {
  const studentId = req.params.studentId;
  query(`DELETE FROM students WHERE id = ${studentId}`)
    .then(response => {
      res.status(200).json({ message: 'Student was deleted.' });
    })
    .catch(next);
};

module.exports = {
  getAll,
  get,
  post,
  update,
  remove,
};
