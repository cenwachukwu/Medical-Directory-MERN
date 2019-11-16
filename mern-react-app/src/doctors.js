import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Doctors extends Component{
    render(){
        return (
            <div>
                <h1>Meet your medical practioners</h1>
                <h2>Find your Doctors</h2>
                <button>
                    <Link to="/Doctors/searchbyprofile">Search by names</Link>
                </button>
                <button>
                    <Link to="/Doctors/searchbyinsurance">Search by insurance</Link>
                </button>
                <button>
                    <Link to="/Doctors/searchbyspeciality">Search by speciality</Link>
                </button>
            </div>
        )
    }
}
export default Doctors;