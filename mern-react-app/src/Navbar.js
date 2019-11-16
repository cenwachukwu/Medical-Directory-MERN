import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'

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
                            <Link to="/Doctors">Doctors</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;