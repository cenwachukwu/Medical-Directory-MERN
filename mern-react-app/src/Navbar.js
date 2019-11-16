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
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Doctors</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;