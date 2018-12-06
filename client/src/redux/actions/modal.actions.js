// @flow

import {
  TOGGLE_MODAL,
  SET_STUDENT,
  RESET_MODAL,
  SET_STUDENT_LOADING,
} from '../constants/modal.constants';
import { Student } from '../../types/student';

// Actions
export function toggleModal() {
  return (dispatch, getState) => {
    if (getState().modal.isActive) {
      dispatch({ type: TOGGLE_MODAL });
      return dispatch(resetModal());
    } else {
      return dispatch({ type: TOGGLE_MODAL });
    }
  };
}

export function setModal(id: number) {
  return dispatch => {
    dispatch(toggleLoading());
    return fetch(`/api/v1/students/${id}`)
      .then(result => result.json())
      .then(result => {
        dispatch(toggleLoading());
        dispatch({ type: SET_STUDENT, student: result });
      })
      .catch(err => {
        console.log(err);
        dispatch(toggleLoading());
      });
  };
}

export function setStudent(student: Student) {
  return dispatch => {
    return dispatch({ type: SET_STUDENT, student });
  };
}

export function toggleLoading() {
  return dispatch => {
    return dispatch({ type: SET_STUDENT_LOADING });
  };
}

export function resetModal() {
  return dispatch => {
    const student = {
      firstName: '',
      lastName: '',
      ppLink: '',
      birthDate: '',
      hobbies: '',
      file: {},
      fileName: '',
    };

    return dispatch({ type: RESET_MODAL, student });
  };
}
