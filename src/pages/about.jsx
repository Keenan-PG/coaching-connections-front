import React from 'react';
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//img
import littleLogo from '../assets/littleLogo.png'
// local component(s)
import EACardWhite from '../components/EACardWhite';
//animate
import {Animated} from "react-animated-css";

const AboutPage = () => {
    return (
        <div>
        <Animated animationInDelay={650} animationIn="fadeIn">    
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
        </Animated>
        <Animated animationInDelay={950} animationIn="fadeIn">    
                <p className="ea-BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h1 className="ea-H1-Grad my-4">5050 <span class="ea-H2 ea-Black">BY</span> 2020</h1>
                <p className="ea-BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
        </Animated>   
                <Row className="my-5">   
                    <Col>
                        <Animated animationInDelay={1100} animationIn="fadeInUp"> 
                            <EACardWhite
                                title=
                                    'Become an ally'
                                content=
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            />
                        </Animated>
                    </Col>
                    <Col>
                        <Animated animationInDelay={1250} animationIn="fadeInUp"> 
                            <EACardWhite
                                title=
                                    'Being a mentor'
                                content=
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            />
                        </Animated>
                    </Col>
                    <Col>
                        <Animated animationInDelay={1400} animationIn="fadeInUp"> 
                            <EACardWhite
                                title=
                                    'Being a mentee'
                                content=
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            />
                        </Animated>
                    </Col>
                </Row>
        </div>
    );
}

export default AboutPage;