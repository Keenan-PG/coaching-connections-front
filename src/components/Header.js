import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="./assets/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'COACHING CONNECTIONS'}
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;