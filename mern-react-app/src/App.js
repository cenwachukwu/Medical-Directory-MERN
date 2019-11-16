import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <br />
          <header></header>
          <h1>Medical Directory</h1>
          <nav>
            <div>
              <p>The Cen Company</p>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Doctors</li>
              </ul>
            </div>
          </nav>
        </Router>
        <main>

        </main>
      </div>
    );
  }

}

export default App;
