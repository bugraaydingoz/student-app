// @flow

import { connect } from 'react-redux';
import _App from './_App';
import { getAllStudents } from './redux/actions/student.actions';

const mapStateToProps = state => {
  return {
    students: state.students.data,
    isLoading: state.students.isLoading,
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
