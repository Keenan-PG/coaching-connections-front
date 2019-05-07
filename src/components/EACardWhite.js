import React from 'react';
import Card from 'react-bootstrap/Card';

// have hamburger with logo/login next to it (like portal)

const EACardWhite = ({title, content}) => {
    return (
        <Card className="ea-Card">
        <Card.Body>
            <Card.Title>
                <h6 className="ea-BodyText-Bold">
                    {title}
                </h6>
            </Card.Title>
            <Card.Text>
                <p className="ea-BodyText">
                    {content}
                </p>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default EACardWhite;