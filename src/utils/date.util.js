const SNAKE_CASE_KEYS = require('../constants/student.constants').SNAKE_CASE_KEYS;

// TODO: use enum
/**
 * Maps iso string to locale string or vice versa
 * type is either "iso" or "locale"
 * iso: maps iso to locale.
 */
module.exports = function dateMapper(student, type) {
  let _student = {};
  let birthDate;
  switch (type) {
    case 'iso':
      // Map iso to locale
      birthDate = new Date(student.birthDate);
      const day = paddingZero(birthDate.getDate());
      const month = paddingZero(birthDate.getMonth() + 1);
      const year = birthDate.getFullYear();
      birthDate = `${day}.${month}.${year}`;
      _student = { ...student, birthDate };
      break;

    case 'locale':
      // Map locale to iso
      const isCorrect = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/.test(student.birthDate);
      if (isCorrect) {
        let dateArray = student.birthDate.split('.');
        const d = paddingZero(Number(dateArray[0]));
        const m = paddingZero(Number(dateArray[1]));
        const y = Number(dateArray[2]);
        birthDate = `${y}-${m}-${d}T00:00:00.000Z`;
        _student = { ...student, birthDate };
      } else {
        throw new Error('Invalid date.');
      }
      break;

    default:
      throw new Error('Invalid map type.');
  }

  return _student;
};

function paddingZero(n) {
  // 1 => 01
  return String('00' + n).slice(-2);
}
