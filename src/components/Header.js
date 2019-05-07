import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// have hamburger with logo/login next to it (like portal)

const Header = () => {
    return (
        <div>
            <Navbar className="EA-Navbar mb-3">
            
                        <Navbar.Brand href="/">
                        <img
                            alt="Equality Allies"
                            src={logo}
                            width="125"
                        />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="ea-NavLink px-4 " href="/">
                                <FontAwesomeIcon icon="home"></FontAwesomeIcon>
                            </Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="/about">About</Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="#">My profile</Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="/mymatches">My matches</Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="/contact">Contact</Nav.Link>
                        </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default Header;