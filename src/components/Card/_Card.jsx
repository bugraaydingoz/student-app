import React, { Component } from 'react';

import './Card.scss';
export default class _Card extends Component {
  render() {
    const { id, first_name, last_name, birth_date, hobbies, pp_link } = this.props.student.student;

    return (
      <div className="card">
        <div className="image is-128by128">
          <img className="is-rounded" src={pp_link} alt="Student" />
        </div>

        <div className="card-content">
          <h3 className="name">
            {first_name} {last_name}
          </h3>
          <p className="birth-date">{birth_date}</p>
          <p className="hobbies">{hobbies}</p>
        </div>

        <div className="buttons">
          <button
            className="button is-white is-rounded"
            id="edit"
            onClick={() => this.props.edit(id)}
          >
            Edit
          </button>
          <div id="delete" onClick={() => this.props.delete(id)}>
            Delete
          </div>
        </div>
      </div>
    );
  }
}
