// @flow

import { connect } from 'react-redux';
import _Modal from './_Modal';
import { toggleModal, resetModal, setStudent } from '../../redux/actions/modal.actions';
import { addStudent, editStudent } from '../../redux/actions/student.actions';

const mapStateToProps = state => {
  return {
    isActive: state.modal.isActive,
    student: state.modal.student,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggleModal()),
    handleSubmit: (student, isEdit) => {
      const { id, firstName, lastName, birthDate, hobbies, file } = student;
      dispatch(setStudent(student));

      const _student = new FormData();
      _student.append('firstName', firstName);
      _student.append('lastName', lastName);
      _student.append('birthDate', birthDate);
      _student.append('hobbies', hobbies);
      _student.append('profilePicture', file);

      if (isEdit) {
        dispatch(editStudent(id, _student));
      } else {
        dispatch(addStudent(_student));
      }
      dispatch(toggleModal());
      dispatch(resetModal());
    },
  };
};

export const Modal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Modal);
