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
