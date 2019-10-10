import React from 'react';
import Header from './components/Header';
import { Router } from '@reach/router';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Students from './components/Students';
import * as api from './api';

class App extends React.Component {
  state = {
    students: []
  };
  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <header>
          <Header />
          <Navigation />
        </header>
        <Router>
          <Home path="/" />
          <Students path="/students" students={students} />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    this.addStudents();
  }

  addStudents = async () => {
    const students = await api.fetchStudents();
    this.setState({ students });
  };
}

export default App;
