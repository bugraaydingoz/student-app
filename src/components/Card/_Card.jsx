import React, { Component } from 'react';

import './Card.scss';
export default class _Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="image is-128by128">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Student"
          />
        </div>

        <div className="card-content">
          <h3 className="name">Bugra Aydingoz</h3>
          <p className="birth-date">29.01.1996</p>
          <p className="hobbies">Reading books, Playing video games</p>
        </div>

        <div className="buttons">
          <button className="button is-white is-rounded" id="edit">
            Edit
          </button>
          <div id="delete">Delete</div>
        </div>
      </div>
    );
  }
}
