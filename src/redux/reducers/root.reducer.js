import { combineReducers } from 'redux';
import studentReducer from './student.reducer';
import modalReducer from './modal.reducer';

export const initialModalState = {
  isActive: false,
  student: {},
};

export const initialStudentState = [];

export const initialRootState = {
  ...initialModalState,
  ...initialStudentState,
};

export const rootReducer = combineReducers({
  students: studentReducer,
  modal: modalReducer,
});
