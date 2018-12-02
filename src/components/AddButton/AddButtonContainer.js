import { connect } from 'react-redux';
import AddButton from './AddButton';
import { toggleModal } from '../../redux/actions/modal.actions';

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggleModal()),
  };
};

export const AddButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddButton);
