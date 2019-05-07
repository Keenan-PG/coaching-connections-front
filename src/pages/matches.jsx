import React from 'react';
import magnifyGraphic from '../assets/magnifyGraphic.png'

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MatchesPage = () => {
    return (
        <div>
            {/** top graphic and text */}
            <Row>
                <Col>
                    <h1 className="ea-HeroTitle ea-Blue">My matches</h1>
                    <hr className="ea-Custom-HR-Blue my-5"></hr>
                </Col>
                <Col className="text-center">
                    <img
                        alt="Equality Allies"
                        src={magnifyGraphic}
                        width="50%"
                    />
                </Col>
            </Row>
            <p className="ea-BodyText my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            {/** cards */}
            <Row className="my-4">
                <Col>
                </Col>
                <Col>  
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    );
}

export default MatchesPage;