// Action Definitions
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// Actions

export function getAllStudents() {
  return dispatch => {
    return fetch('/api/v1/students')
      .then(result => result.json())
      .then(result => {
        const students = result.students;
        dispatch({ type: GET_ALL_STUDENTS, students });
      })
      .catch(err => console.log(err));
  };
}

export function addStudent(student) {
  return dispatch => {
    return fetch(`/api/v1/students/`, { method: 'POST', body: student })
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          const _student = result.student;
          dispatch({ type: ADD_STUDENT, student: _student });
        }
      })
      .catch(err => console.log(err));
  };
}

export function editStudent(id, student) {
  return dispatch => {
    return fetch(`/api/v1/students/${id}`, { method: 'PUT' })
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          dispatch({ type: DELETE_STUDENT, id });
        }
      })
      .catch(err => console.log(err));
  };
}

export function deleteStudent(id) {
  return dispatch => {
    return fetch(`/api/v1/students/${id}`, { method: 'DELETE' })
      .then(result => result.json())
      .then(result => {
        if (result.ok) {
          dispatch({ type: DELETE_STUDENT, id });
        }
      })
      .catch(err => console.log(err));
  };
}
