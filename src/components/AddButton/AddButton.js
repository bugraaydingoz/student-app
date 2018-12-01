import React, { Component } from 'react';
import './AddButton.scss';

export default class AddButton extends Component {
  render() {
    return (
      <>
        <button className="button is-white is-rounded" id="add">
          Add Student
        </button>
      </>
    );
  }
}
