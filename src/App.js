import React, { Component } from 'react';
import './App.css';
import User from "./user/Userdetails"
import Show from "./show/Show"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <User />
        </div>
        <Show />
      </div>
    );
  }
}
export default App;
