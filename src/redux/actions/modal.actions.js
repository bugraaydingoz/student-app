// Action Definitions
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_STUDENT = 'SET_STUDENT';

// Actions
export function toggleModal() {
  return dispatch => {
    dispatch({ type: TOGGLE_MODAL });
  };
}

export function setModal(id) {
  return dispatch => {
    return fetch(`/api/v1/students/${id}`)
      .then(result => result.json())
      .then(result => {
        dispatch({ type: SET_STUDENT, student: result });
      })
      .catch(err => console.log(err));
  };
}
