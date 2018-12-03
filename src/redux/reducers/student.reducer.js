import { GET_ALL_STUDENTS, DELETE_STUDENT, ADD_STUDENT } from '../actions/student.actions';
import { initialStudentState } from './root.reducer';

// TODO
export default function studentReducer(state = initialStudentState, action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      const students = action.students;
      return [...state, ...students];
    case ADD_STUDENT:
      const student = action.student;
      return [...state, student];
    case DELETE_STUDENT:
      const id = action.id;
      return state.filter(student => student.id !== id);
    default:
      return state;
  }
}
