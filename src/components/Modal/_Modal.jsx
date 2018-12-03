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
      ppLink: '',
      file: {},
      fileName: '',
      isEdit: false,
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleBirthDate = this.handleBirthDate.bind(this);
    this.handleHobbies = this.handleHobbies.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.student && nextProps.student.id && this.props.student && !this.props.student.id) {
      this.setState({ ...nextProps.student, isEdit: true });
    } else if (nextProps.student && !nextProps.student.id && this.state.isEdit) {
      this.resetState();
    }
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

  resetState() {
    this.setState({
      firstName: '',
      lastName: '',
      birthDate: '',
      hobbies: '',
      ppLink: '',
      file: {},
      fileName: '',
      isEdit: false,
    });
  }

  render() {
    const isActive = this.props.isActive ? 'is-active' : '';
    const { firstName, lastName, birthDate, hobbies, fileName, ppLink, isEdit } = this.state;
    let _fileName = fileName === '' || fileName === undefined ? 'No file chosen.' : fileName;

    const title = !isEdit ? 'Add a new student' : 'Edit the student';
    return (
      <div className={`modal ${isActive}`}>
        <div className="modal-background" onClick={this.props.toggle} />
        <div className="modal-content">
          <h1 className="title is-3">{title}</h1>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="John"
                value={firstName}
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
                value={lastName}
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
                value={birthDate}
                onChange={this.handleBirthDate}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Hobbies</label>
            <textarea
              className="textarea"
              placeholder="e.g. reading, cooking"
              value={hobbies}
              onChange={this.handleHobbies}
            />
          </div>
          <div className="field">
            <label className="label">Profile Picture</label>
            <div className="file has-name">
              {isEdit && (
                <div className="image-container">
                  <div className="image is-128by128">
                    <img className="is-rounded" src={ppLink} alt="Student" />
                  </div>
                </div>
              )}
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
                  <span className="file-label">Choose a picture</span>
                </span>
                {(isEdit && _fileName === 'No file chosen.' && (
                  <span className="file-name">Choose a file to edit.</span>
                )) || <span className="file-name">{_fileName}</span>}
              </label>
            </div>
          </div>
          <button
            className="button is-white is-rounded"
            id="modal-add"
            onClick={() => {
              this.props.handleSubmit(this.state);
              this.resetState();
            }}
          >
            Submit
          </button>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.toggle} />
      </div>
    );
  }
}
