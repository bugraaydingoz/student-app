// @flow

import React, { Component } from 'react';
import './AddButton.scss';

type Props = {
  toggle: () => void,
};

export default class _AddButton extends Component<Props> {
  render() {
    return (
      <button className="button is-white is-rounded" id="add" onClick={() => this.props.toggle()}>
        Add Student
      </button>
    );
  }
}
