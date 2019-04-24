import React from 'react';
import bigLogo from '../assets/bigLogo.png'

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EACardImg from '../components/EACardImg'

const MainPage = () => {
    return (
        <div>
            {/** top logo and text */}
            <Row className="my-4 ea-lGrey-BG">
                <Col className="justify-content-center">
                    <img
                        alt="Equality Allies"
                        src={bigLogo}
                    />
                </Col>
                <Col className="my-auto">            
                    <h1 className="ea-HeroTitle">Coaching Connections</h1>
                    <hr className="ea-Custom-HR-Blue my-5"></hr>
                    <p className="ea-BodyText my-3">
                        Connect - Coach - Continue to grow
                    </p>
                    <Button variant="primary" className="btn-lg ea-Btn-Positive-Primary my-3">
                        Get Started
                    </Button>
                </Col>
            </Row>
            {/** categories head and text */}
            <Row className="mt-4">   
                <Col>
                    <h1 className="ea-H1 ea-Black">
                        Categories
                    </h1>
                    <hr className="ea-Custom-HR-Black my-3"></hr>
                    <p className="ea-BodyText my-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Col>
            </Row>
            {/** cards */}
            <Row className="my-4">
                <Col>
                    <EACardImg 
                        src="https://via.placeholder.com/10" 
                        content={
                            <h3 className="ea-H2 ea-Black">Coaches/Coachees</h3>
                        }
                    >
                    </EACardImg>
                </Col>
                <Col>  
                    <EACardImg 
                        src="https://via.placeholder.com/10" 
                        content={
                            <h3 className="ea-H2 ea-Black">Your results</h3>
                        }
                    >
                    </EACardImg>
                </Col>
                <Col>
                    <EACardImg 
                        src="https://via.placeholder.com/10" 
                        content= {
                            <h3 className="ea-H2 ea-Black">Enter your details</h3>
                        }
                    >
                    </EACardImg>
                </Col>
            </Row>
        </div>
    );
}

export default MainPage;