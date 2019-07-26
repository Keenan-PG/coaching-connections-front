import React from 'react';
//img
import logo from '../assets/logo.png';
//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//animate
import {Animated} from "react-animated-css";


// have hamburger with logo/login next to it (like portal)

const Header = () => {
    return (
        <div className="p-05">
        <Animated animationInDelay={350} animationIn="fadeInDown" isVisible={true}>   
            <Navbar className="EA-Navbar mb-3" id="header">   
                    <Col>
                        <Navbar.Brand href="/">
                        <img
                            alt="Equality Allies"
                            src={logo}
                            width="125"
                        />
                        </Navbar.Brand>
                    </Col>
                    
                    <div className="col no-pad-left">
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-around">
                            <Nav.Link className="ea-NavLink px-4 " href="/">
                                <FontAwesomeIcon icon="home"></FontAwesomeIcon>
                            </Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="/about">About</Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="#">My profile</Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="/mymatches">My matches</Nav.Link>
                            <Nav.Link className="ea-NavLink px-4 " href="/contact">Contact us</Nav.Link>
                        </Navbar.Collapse>
                    </div>
            </Navbar>
            </Animated>
        </div>
    )
}

export default Header;