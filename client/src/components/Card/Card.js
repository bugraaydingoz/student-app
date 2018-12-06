// @flow

import { connect } from 'react-redux';
import _Card from './_Card';
import { deleteStudent } from '../../redux/actions/student.actions';
import { toggleModal, setModal } from '../../redux/actions/modal.actions';

const mapStateToProps = state => {
  return {
    isLoading: state.modal.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    edit: (id: number) => {
      dispatch(setModal(id)).then(() => dispatch(toggleModal()));
    },
    delete: (id: number) => dispatch(deleteStudent(id)),
  };
};

export const Card = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Card);
