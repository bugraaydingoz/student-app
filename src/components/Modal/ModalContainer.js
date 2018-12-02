import { connect } from 'react-redux';
import Modal from './Modal';
import { toggleModal } from '../../redux/actions/modal.actions';

const mapStateToProps = state => {
  return {
    isActive: state.modal.isActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggleModal()),
  };
};

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
