import React, { Component } from 'react';

import './Modal.scss';
export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-background" />
        <div className="modal-content">
          <h1 className="title is-3">Add a new student</h1>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="John" />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="field">
            <label className="label">Birth Date</label>
            <div className="control">
              <input className="input" type="text" placeholder="29/01/1996" />
            </div>
          </div>
          <div className="field">
            <label className="label">Hobbies</label>
            <textarea className="textarea" placeholder="e.g. reading, cooking" />
          </div>
          <div className="field">
            <label className="label">Profile Picture</label>
            <div className="file">
              <label className="file-label">
                <input className="file-input" type="file" name="profilePicture" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Choose a profile picture</span>
                </span>
              </label>
            </div>
          </div>
          <button className="button is-white is-rounded" id="modal-add">
            Submit
          </button>
        </div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    );
  }
}
