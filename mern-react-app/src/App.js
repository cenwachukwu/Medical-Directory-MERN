import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <br />
        </Router>
      </div>
    );
  }

}

export default App;
