import React from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import littleLogo from '../assets/littleLogo.png'
import EACardWhite from '../components/EACardWhite';

const AboutPage = () => {
    return (
        <div>
                <Row>
                    <Col>
                        <h1 className="ea-HeroTitle ea-Blue">About us</h1>
                        <hr className="ea-Custom-HR-Blue my-5"></hr>
                    </Col>
                    <Col className="text-center">
                        <img
                            alt="Equality Allies"
                            src={littleLogo}
                            width="20%"
                        />
                    </Col>
                </Row>
                <p className="ea-BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h1 className="ea-H1-Grad my-4">5050 <span class="ea-H2 ea-Black">BY</span> 2020</h1>
                <p className="ea-BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Row className="my-5">   
                    <Col>
                        <EACardWhite
                            title=
                                'Become an ally'
                            content=
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            >
                        </EACardWhite>
                    </Col>
                    <Col>
                    <EACardWhite
                    title=
                        'Being a mentor'
                    content=
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    >
                </EACardWhite>
                    </Col>
                    <Col>
                    <EACardWhite
                    title=
                        'Being a mentee'
                    content=
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    >
                </EACardWhite>
                    </Col>
                </Row>
        </div>
    );
}

export default AboutPage;