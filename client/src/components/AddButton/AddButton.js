import { connect } from 'react-redux';
import _AddButton from './_AddButton';
import { toggleModal } from '../../redux/actions/modal.actions';

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch(toggleModal()),
  };
};

export const AddButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_AddButton);
