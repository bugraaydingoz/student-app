import { TOGGLE_MODAL, SET_STUDENT, RESET_MODAL } from '../constants/modal.constants';

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
    return fetch(`/api/v1/students/${id}`)
      .then(result => result.json())
      .then(result => {
        dispatch({ type: SET_STUDENT, student: result });
      })
      .catch(err => console.log(err));
  };
}

export function setStudent(student) {
  return dispatch => {
    return dispatch({ type: SET_STUDENT, student });
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
