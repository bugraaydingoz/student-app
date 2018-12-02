import { connect } from 'react-redux';
import _Modal from './_Modal';
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

export const Modal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Modal);
