import { connect } from 'react-redux';
import _Card from './_Card';
import { deleteStudent } from '../../redux/actions/student.actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deleteStudent(id)),
  };
};

export const Card = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Card);
