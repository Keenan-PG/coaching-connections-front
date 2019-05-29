import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

// have hamburger with logo/login next to it (like portal)

const MatchCard = ({user, title, experience, offering}) => {
    
    // loop to break appart offering array
    const renderOffers = (arr) => {
        for(let i=0; i < arr.length; i++) {
            let render = arr[i];
            // PUT IN ICONS FOR CATEGORIES INSTEAD - BLUE ICONS 
            // return (
            //     <Col>
        //          CATEGORY ICON
            //    </Col>
            // );
        }
    }

    return (
        // Col renders as a div class col anyway
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
                        <Card.Text className="ea-BodyText py-2">
                            Offering: {renderOffers(offering)}
                             {/* <Row>
                                {renderOffers(offering)}
                             </Row> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default MatchCard;