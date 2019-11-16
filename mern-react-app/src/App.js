import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <br />
          <Route path="/" exact component ={Home}/>
          <Route path="/About" component ={About}/>
          <Route path="/Doctors" component ={Doctors}/>
        </Router>
      </div>
    );
  }

}

export default App;
