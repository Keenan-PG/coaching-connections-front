import React from 'react';
import Card from 'react-bootstrap/Card';

// have hamburger with logo/login next to it (like portal)

const EACardImg = ({src, content}) => {
    return (
        <Card className="ea-Card">
        <Card.Img variant="top" src={src} />
        <Card.Body>
            <Card.Text>
                {content}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default EACardImg;