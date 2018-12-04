const SNAKE_CASE_KEYS = require('../constants/student.constants').SNAKE_CASE_KEYS;
const CAMEL_CASE_KEYS = require('../constants/student.constants').CAMEL_CASE_KEYS;

// TODO: use enum
/**
 * Maps snake_case to camelCase or vice versa.
 * type is either "snake" or "camel"
 * snake: maps snake case to camel case.
 */
module.exports = function studentMapper(student, type) {
  let _student = {};
  switch (type) {
    case 'snake':
      // Map snake_case to camelCase
      for (const snakeCaseKey in student) {
        if (student.hasOwnProperty(snakeCaseKey)) {
          const value = student[snakeCaseKey];
          const camelCaseKey = SNAKE_CASE_KEYS[snakeCaseKey];
          _student[camelCaseKey] = value;
        }
      }
      break;

    case 'camel':
      // Map snake_case to camelCase
      for (const camelCaseKey in student) {
        if (student.hasOwnProperty(camelCaseKey)) {
          const value = student[camelCaseKey];
          const snakeCaseKey = SNAKE_CASE_KEYS[camelCaseKey];
          _student[snakeCaseKey] = value;
        }
      }
      break;

    default:
      throw new Error('Invalid map type.');
  }

  return _student;
};
