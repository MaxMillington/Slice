import React, { Component } from 'react';
import './App.css';
import ColorContainer from './components/ColorContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Lazy Load that scrolls until you reach 150 items</h2>
        </div>
        <ColorContainer />
      </div>
    );
  }
}

export default App;
