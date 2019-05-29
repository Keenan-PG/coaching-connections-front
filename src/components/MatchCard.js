import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

// have hamburger with logo/login next to it (like portal)

const MatchCard = ({user, title, experience, offering}) => {
    const renderOffers = (arr) => {
        for(let i=0; i < arr.length; i++) {
            let render;
            if ( i !== (arr.length - 1)) {
                render = arr[i]
            }
        }
    }

    return (
        <div>
            <Col>
                <Card className="ea-Card">
                    <Card.Body>
                        <Card.Title className="ea-H2 ea-Blue py-1">
                            {user}
                        </Card.Title>
                        <Card.Subtitle className="ea-BodyText-Bold">
                            {title}
                        </Card.Subtitle>
                        <Card.Subtitle className="ea-BodyText py-2">
                            {experience} years experience
                        </Card.Subtitle>
                        <ul className="ea-BodyText">
                            Offering: 
                            {renderOffers(offering)}
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default MatchCard;