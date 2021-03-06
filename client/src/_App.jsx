// @flow

import React, { Component } from 'react';
import { AddButton } from './components/AddButton/AddButton';
import { Modal } from './components/Modal/Modal';
import { Card } from './components/Card/Card';
import { Loading } from './components/Misc/Loading';
import { Student } from './types/student';
import './App.scss';

type Props = {
  fetchStudents: () => void,
  students: Student[],
  isLoading: boolean,
};

export default class _App extends Component<Props> {
  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const students = this.props.students || [];
    const isLoading = this.props.isLoading;

    return (
      <div className="app">
        <header className="header-bg">
          <h1 className="header-text">Student App</h1>
          <p className="description">
            It is an application where you can see the list of students, and have the ability to add
            a student, edit or delete them.
          </p>
          <AddButton />
        </header>

        <main>
          <Modal />
          <div className="container">
            <div className="columns is-multiline  is-gapless">
              {students.map((student, index) => {
                return <CardContainer key={index} student={student} />;
              })}
              {isLoading && students.length === 0 && <Loading />}
              {!isLoading && students.length === 0 && <NoStudentText />}
            </div>
          </div>
        </main>

        <footer className="footer-bg">
          <h1>
            Made by Buğra Aydıngöz with &nbsp;
            <i className="fas fa-heart" />
          </h1>
          <a href="https://github.com/bugraaydingoz/student-app">
            Source Code &nbsp;
            <i className="fab fa-github" />
          </a>
        </footer>
      </div>
    );
  }
}

const CardContainer = ({ student }) => (
  <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
    <Card student={student} />
  </div>
);

const NoStudentText = () => (
  <div className="column is-full">
    <h1 className="no-student has-text-centered">There are not any students.</h1>
  </div>
);
