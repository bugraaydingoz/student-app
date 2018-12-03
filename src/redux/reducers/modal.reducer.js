import { TOGGLE_MODAL, SET_STUDENT } from '../actions/modal.actions';
import { initialModalState } from './root.reducer';

export default function modalReducer(state = initialModalState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isActive: !state.isActive };
    case SET_STUDENT:
      const student = action.student;
      return { ...state, student };
    default:
      return state;
  }
}
