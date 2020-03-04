import React , {Component}from 'react';
import './App.css';
import User from "./user/Userdetails"

class App extends Component {
  render(){
  return (
    <div className="App">
    <h3>Details</h3>
    <User/>
    </div>
  );
}
}
export default App;
