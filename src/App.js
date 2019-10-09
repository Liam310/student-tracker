import React from 'react';
import Header from './components/Header';
import { Router } from '@reach/router';
import './App.css';
import Navigation from './components/Navigation';

class App extends React.Component {
  state = {
    students: []
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Router>
          <div path="/yeet">Yeet</div>
        </Router>
      </div>
    );
  }
}

export default App;
