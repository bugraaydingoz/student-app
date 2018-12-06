const fs = require('fs');
const query = require('../utils/db.util');
const studentMapper = require('../utils/object.util');
const dateMapper = require('../utils/date.util');

const getAll = (req, res, next) => {
  query(`SELECT * FROM students`)
    .then(students => {
      const count = students.length;

      const _students = students
        .map(student => studentMapper(student, 'snake'))
        .map(student => dateMapper(student, 'iso'));
      res
        .status(200)
        .json({ ok: 1, message: 'Students were fetched.', count, students: _students });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const get = (req, res, next) => {
  const studentId = req.params.studentId;
  query(`SELECT * FROM students WHERE id = ${studentId}`)
    .then(student => {
      let _student = studentMapper(student[0], 'snake');
      _student = dateMapper(_student, 'iso');
      res.status(200).json({ ..._student });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const post = (req, res, next) => {
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    hobbies: req.body.hobbies,
    ppLink: (req.file && req.file.path) || '',
  };

  let _student = dateMapper(student, 'locale');
  query(
    `INSERT INTO students (first_name, last_name, birth_date, hobbies, pp_link) VALUES (?, ?, ?, ?, ?)`,
    Object.values(_student),
  )
    .then(response => {
      _student = { ...student, id: response.insertId };
      res.status(201).json({
        ok: 1,
        message: 'Student  was created.',
        student: { ..._student },
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const update = (req, res, next) => {
  const studentId = req.params.studentId;
  const newStudent = {
    id: Number(studentId),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    hobbies: req.body.hobbies,
    ppLink: req.file && req.file.path,
  };

  let _student = {};
  query(`SELECT * FROM students WHERE id = ${studentId}`)
    .then(oldStudent => {
      if (!oldStudent[0]) {
        res.status(404).json({ ok: 0, message: 'Student does not exist.' });
      } else {
        _student = studentMapper(oldStudent[0], 'snake');
        return _student;
      }
    })
    .then(() => {
      if (!newStudent.ppLink) {
        _student = { ...newStudent, ppLink: _student.ppLink };
      } else {
        // Also remove the profile picture.
        try {
          fs.unlinkSync(_student.ppLink);
        } catch (error) {
          console.log(error);
        }

        _student = { ...newStudent };
      }

      _student = dateMapper(_student, 'locale');

      return query(
        `UPDATE students SET first_name = ?, last_name = ?, birth_date = ?, hobbies = ?, pp_link = ? WHERE id = ?`,
        [...Object.values(_student), studentId],
      );
    })
    .then(response => {
      _student = dateMapper(_student, 'iso');
      res.status(201).json({ ok: 1, message: 'Student was updated.', student: _student });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const remove = (req, res, next) => {
  const studentId = req.params.studentId;
  let _student = {};
  query(`SELECT * FROM students WHERE id = ${studentId}`)
    .then(student => {
      if (!student[0]) {
        res.status(404).json({ ok: 0, message: 'Student does not exist.' });
      } else {
        _student = studentMapper(student[0], 'snake');
        return _student;
      }
    })
    .then(() => {
      return query(`DELETE FROM students WHERE id = ${studentId}`);
    })
    .then(response => {
      // Also remove the profile picture.
      try {
        fs.unlinkSync(_student.ppLink);
      } catch (error) {
        console.log(error);
      }

      res.status(200).json({ ok: 1, message: 'Student was deleted.' });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

module.exports = {
  getAll,
  get,
  post,
  update,
  remove,
};
