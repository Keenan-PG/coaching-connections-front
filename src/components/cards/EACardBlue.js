import React from 'react';
import Card from 'react-bootstrap/Card';

// have hamburger with logo/login next to it (like portal)

const EACardBlue = ({title, content}) => {
    return (
        <Card className="card">
        <Card.Body>
            <Card.Title>
                <h6 className="body-text-bold">
                    {title}
                </h6>
            </Card.Title>
            <Card.Text>
                <p className="body-text">
                    {content}
                </p>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default EACardBlue;