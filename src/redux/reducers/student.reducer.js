import { GET_ALL_STUDENTS } from '../actions/student.actions';
import { initialStudentState } from './root.reducer';

// TODO
export default function studentReducer(state = initialStudentState, action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      const students = action.students;
      return [...state, ...students];
    default:
      return state;
  }
}
