import { connect } from 'react-redux';
import Modal from './Modal';
import { TOGGLE_MODAL } from '../../redux/actions/modal.actions';

const mapStateToProps = state => {
  console.log(state);
  return {
    isActive: state.modal.isModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(TOGGLE_MODAL),
  };
};

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
