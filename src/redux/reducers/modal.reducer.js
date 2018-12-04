import { TOGGLE_MODAL, SET_STUDENT, RESET_MODAL } from '../constants/modal.constants';
import { initialModalState } from './root.reducer';

export default function modalReducer(state = initialModalState, action) {
  if (action.type === TOGGLE_MODAL) {
    return { ...state, isActive: !state.isActive };
  } else if (action.type === SET_STUDENT) {
    const student = action.student;
    return { ...state, student };
  } else if (action.type === RESET_MODAL) {
    const student = action.student;
    return { ...state, student };
  } else {
    return state;
  }
}
