import {
  GET_ALL_STUDENTS,
  GET_ALL_STUDENTS_LOADING,
  ADD_STUDENT,
  DELETE_STUDENT,
} from '../constants/student.constants';

// Actions
export function getAllStudents() {
  return dispatch => {
    dispatch(toggleStudentsLoading());
    return fetch('/api/v1/students')
      .then(result => result.json())
      .then(result => {
        const students = result.students;
        dispatch(toggleStudentsLoading());
        dispatch({ type: GET_ALL_STUDENTS, students });
      })
      .catch(err => {
        console.log(err);
        dispatch(toggleStudentsLoading());
      });
  };
}

export function toggleStudentsLoading() {
  return dispatch => {
    return dispatch({ type: GET_ALL_STUDENTS_LOADING });
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
