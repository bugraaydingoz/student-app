import { TOGGLE_MODAL } from '../actions/modal.actions';
import { initialModalState } from './root.reducer';

export default function modalReducer(state = initialModalState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
}
