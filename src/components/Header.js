import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <div>
            <Navbar className="EA-Navbar">
                <Navbar.Brand href="#home">Coaching Connections</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="#">My profile</Nav.Link>
                    <Nav.Link href="#">My matches</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;