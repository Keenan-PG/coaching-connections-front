import React from 'react';
import magnifyGraphic from '../assets/magnifyGraphic.png'
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//animate
import {Animated} from "react-animated-css";

const ContactPage = () => {
    return (
        <div>

            <Animated animationInDelay={650} animationIn="fadeIn">    
                    <Row>
                        <Col>
                            <h1 className="hero-title blue">Contact us</h1>
                            <hr className="hr-blue my-5"></hr>
                        </Col>
                        <Col className="text-center">
                            <img
                            alt="Equality Allies"
                            src={magnifyGraphic}
                            width="50%"
                            />
                        </Col>
                    </Row>
            </Animated>
            <Animated animationInDelay={750} animationIn="fadeIn"> 
                <p className="body-text my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </Animated>

        </div>
    );
}

export default ContactPage;