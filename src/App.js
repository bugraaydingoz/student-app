import { connect } from 'react-redux';

import _App from './_App';
import { getAllStudents } from './redux/actions/student.actions';

const mapStateToProps = state => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(getAllStudents()),
  };
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);
