import React from 'react';
import Card from 'react-bootstrap/Card';

// have hamburger with logo/login next to it (like portal)

const EACardImg = ({src, content}) => {
    return (
        <Card className="card">
        <Card.Img variant="top" src={src} />
        <Card.Body>
                <h6 className="body-text-bold">
                    {content}
                </h6>
        </Card.Body>
    </Card>
    )
}

export default EACardImg;