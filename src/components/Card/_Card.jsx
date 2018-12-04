import React, { Component } from 'react';

import './Card.scss';
export default class _Card extends Component {
  onImageError(event) {
    const src = 'https://via.placeholder.com/256x256?text=:)';
    event.target.onerror = null;
    event.target.src = src;
  }
  render() {
    const { id, firstName, lastName, birthDate, hobbies, ppLink } = this.props.student;

    return (
      <div className="card">
        <div className="image is-128by128">
          <img
            className="is-rounded"
            src={ppLink}
            alt="Student"
            onError={this.onImageError.bind(this)}
          />
        </div>

        <div className="card-content">
          <h3 className="name">
            {firstName} {lastName}
          </h3>
          <p className="birth-date">{birthDate}</p>
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
