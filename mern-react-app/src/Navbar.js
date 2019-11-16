import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="signature">
                    <h1>Medical Directory</h1>
                </div>
                <div className="NavLinks">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Doctors</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;