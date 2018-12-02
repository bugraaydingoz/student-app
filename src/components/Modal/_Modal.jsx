import React, { Component } from 'react';

import './Modal.scss';
export default class _Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: '',
      hobbies: '',
      file: {},
      fileName: '',
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleBirthDate = this.handleBirthDate.bind(this);
    this.handleHobbies = this.handleHobbies.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleBirthDate(event) {
    this.setState({
      birthDate: event.target.value,
    });
  }

  handleHobbies(event) {
    this.setState({
      hobbies: event.target.value,
    });
  }

  handleFile(event) {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.files[0].name,
    });
  }

  handleSubmit() {
    const { firstName, lastName, birthDate, hobbies, file } = this.state;

    const student = new FormData();
    student.append('firstName', firstName);
    student.append('lastName', lastName);
    student.append('birthDate', birthDate);
    student.append('hobbies', hobbies);
    student.append('profilePicture', file);

    this.props.addStudent(student);
    this.props.toggle();
    this.resetState();
  }

  resetState() {
    this.setState({
      firstName: '',
      lastName: '',
      birthDate: '',
      hobbies: '',
      file: {},
      fileName: '',
    });
  }

  render() {
    const isActive = this.props.isActive ? 'is-active' : '';
    const fileName = this.state.fileName === '' ? 'No file chosen.' : this.state.fileName;

    return (
      <div className={`modal ${isActive}`}>
        <div className="modal-background" onClick={this.props.toggle} />
        <div className="modal-content">
          <h1 className="title is-3">Add a new student</h1>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="John"
                onChange={this.handleFirstName}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Doe"
                onChange={this.handleLastName}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Birth Date</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="29.01.1996"
                onChange={this.handleBirthDate}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Hobbies</label>
            <textarea
              className="textarea"
              placeholder="e.g. reading, cooking"
              onChange={this.handleHobbies}
            />
          </div>
          <div className="field">
            <label className="label">Profile Picture</label>
            <div className="file has-name">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="profilePicture"
                  onChange={this.handleFile}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Choose a profile picture</span>
                </span>
                <span className="file-name">{fileName}</span>
              </label>
            </div>
          </div>
          <button className="button is-white is-rounded" id="modal-add" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.toggle} />
      </div>
    );
  }
}
