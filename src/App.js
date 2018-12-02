import React, { Component } from 'react';
import { AddButton } from './components/AddButton/AddButton';
import { Modal } from './components/Modal/Modal';
import { Card } from './components/Card/Card';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header-bg">
          <h1 className="header-text">Student App</h1>
          <p className="description">
            It is an application where you can show list of students, and have the ability to add,
            edit and delete them.
          </p>
          <AddButton />
        </header>

        <main>
          <Modal />
          <div className="container">
            <div className="columns is-multiline  is-gapless">
              <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
                <Card />
              </div>
              <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
                <Card />
              </div>
              <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
                <Card />
              </div>
              <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop">
                <Card />
              </div>
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

export default App;
