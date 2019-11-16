import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Doctors extends Component {
    render() {
        return (
            <div>
                <h1>Meet your medical practioners</h1>
                <h2>Find your Doctors</h2>
                <Link to="/Doctors/searchbyprofile">
                    <button>
                        Search by names
                    </button>
                </Link>
                <Link to="/Doctors/searchbyinsurance">
                    <button>
                        Search by insurance
                    </button>
                </Link>
                <Link to="/Doctors/searchbyspeciality">
                    <button>
                        Search by speciality
                    </button>
                </Link>
            </div>
        )
    }
}
export default Doctors;