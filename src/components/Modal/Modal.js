import { connect } from 'react-redux';
import _Modal from './_Modal';
import { toggleModal } from '../../redux/actions/modal.actions';
import { addStudent } from '../../redux/actions/student.actions';

const mapStateToProps = state => {
  return {
    isActive: state.modal.isActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggleModal()),
    addStudent: student => dispatch(addStudent(student)),
  };
};

export const Modal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Modal);
