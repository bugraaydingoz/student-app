import {
  GET_ALL_STUDENTS,
  DELETE_STUDENT,
  ADD_STUDENT,
  GET_ALL_STUDENTS_LOADING,
} from '../constants/student.constants';
import { initialStudentState } from './root.reducer';

// TODO
export default function studentReducer(state = initialStudentState, action) {
  if (action.type === GET_ALL_STUDENTS) {
    const data = action.students;
    return { ...state, data };
  } else if (action.type === GET_ALL_STUDENTS_LOADING) {
    const isLoading = !state.isLoading;
    return { ...state, isLoading };
  } else if (action.type === ADD_STUDENT) {
    const student = action.student;
    const data = [...state.data, student];
    return { ...state, data };
  } else if (action.type === DELETE_STUDENT) {
    const id = action.id;
    const data = state.data.filter(student => student.id !== id);
    return { ...state, data };
  } else {
    return state;
  }
}
