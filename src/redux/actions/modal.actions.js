// Action Definitions
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_STUDENT = 'SET_STUDENT';

// Actions
export function toggleModal() {
  return dispatch => {
    dispatch({ type: TOGGLE_MODAL });
  };
}
