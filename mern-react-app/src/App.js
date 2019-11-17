import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";
import DoctorEdit from "./DoctorEdit";
import Findalldoctors from "./Findalldoctors"
import Profile from "./Searchbyprofile";
import Insurance from "./Searchbyinsurance";
import Speciality from "./Searchbyspeciality"

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
          <Route path="/DoctorEdit" component ={DoctorEdit}/>
          <Route path="/Doctors/findall" component ={Findalldoctors}/>
          <Route path="/Doctors/searchbyprofile" component ={Profile}/>
          <Route path="/Doctors/searchbyinsurance" component ={Insurance}/>
          <Route path="/Doctors/searchbyspeciality" component ={Speciality}/>
        </Router>
      </div>
    );
  }

}

export default App;
