import React, { Component } from 'react';
import './AddButton.scss';

export default class _AddButton extends Component {
  render() {
    return (
      <button className="button is-white is-rounded" id="add" onClick={() => this.props.toggle()}>
        Add Student
      </button>
    );
  }
}
