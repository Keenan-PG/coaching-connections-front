import React from 'react';
import bigLogo from '../assets/bigLogo.png'
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EACardImg from '../components/EACardImg'
//animate
import {Animated} from "react-animated-css";

const MainPage = () => {
    return (
        <div>
            {/** top logo and text */}
            <Row className="my-4" id="landing">
                <Col className="justify-content-center my-auto">
                    <Animated animationInDelay="950" animationIn="fadeIn">    
                        <img
                            alt="Equality Allies"
                            src={bigLogo}
                        />
                    </Animated>
                </Col>
                <Col className="my-auto">  
                    <Animated animationInDelay="750" animationIn="fadeIn">          
                        <h1 className="ea-HeroTitle">Coaching Connections</h1>
                        <hr className="ea-Custom-HR-Blue my-5"></hr>
                    </Animated>
                    <Animated animationInDelay="950" animationIn="fadeIn">  
                        <p className="ea-BodyText my-3">
                            Connect - Coach - Continue to grow
                        </p>
                    </Animated>
                    <Animated animationInDelay="1050" animationIn="fadeIn">  
                        <Button variant="primary" className="btn-lg ea-Btn-Positive-Secondary my-3">
                            Get Started
                        </Button>
                    </Animated>
                </Col>
            </Row>
            {/** categories head and text */}
            <Row className="my-5">   
                <Col>
                    <Animated animationInDelay="1100" animationIn="fadeIn"> 
                        <h1 className="ea-H1 ea-Black">
                            Categories
                        </h1>
                        <hr className="ea-Custom-HR-Black my-3"></hr>
                        <p className="ea-BodyText my-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </Animated>
                </Col>
            </Row>
            {/** cards */}
            <Row className="my-4">
                <Col>
                    <Animated animationInDelay="1100" animationIn="fadeInUp"> 
                        <EACardImg 
                            src="https://via.placeholder.com/10" 
                            content={
                                'Coaches/Coachees'
                            }
                        />
                    </Animated>
                </Col>
                <Col>  
                    <Animated animationInDelay="1250" animationIn="fadeInUp"> 
                        <EACardImg 
                            src="https://via.placeholder.com/10" 
                            content={
                                'Your results'
                            }
                        />
                    </Animated>
                </Col>
                <Col>
                    <Animated animationInDelay="1400" animationIn="fadeInUp"> 
                        <EACardImg 
                            src="https://via.placeholder.com/10" 
                            content= {
                                'Enter your details'
                            } 
                        />
                    </Animated>
                </Col>
            </Row>
        </div>
    );
}

export default MainPage;