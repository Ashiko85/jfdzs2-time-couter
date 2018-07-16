import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Junior Frontend Developer</h1>
          <p>We completed the course </p>
          <TimeAgo date='july 15, 2018 22:00' />
      </div>
    );
  }
}

export default App;
