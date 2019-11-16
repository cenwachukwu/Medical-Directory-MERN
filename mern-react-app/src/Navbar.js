import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <Link>The CEN Company</Link>
                <div className="NavLinks">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Doctors">Find your doctor</Link>
                        </li>
                        <li>
                            <Link to="/DoctorEdit">Doctors click here</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;