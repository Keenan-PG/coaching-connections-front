import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// have hamburger with logo/login next to it (like portal)

class MatchCard extends React.Component {
    constructor(props, context) {
        super(props,context);

        this.state = {
            open: false,
        }
    }

    render() {
        const { open } = this.state;

        // adding commmas/spaces
        const offeringStr = (offering) => offering.join(", ");
 
        return (
            <Col xs={4} 
            className="mt-5">
                <Card className="ea-Card">
                    <Card.Body>
                        <Card.Title className="ea-H2 ea-Blue py-1">
                            {this.props.user}
                        </Card.Title>
                        <Card.Subtitle className="ea-BodyText-Bold">
                            {this.props.title}
                        </Card.Subtitle>
                        <Card.Subtitle className="ea-BodyText py-2">
                            {this.props.experience} years experience
                        </Card.Subtitle>
                        <Card.Text className="ea-BodyText py-2">
                            <small>
                                Offering: {offeringStr(this.props.offering)}
                            </small>
                        </Card.Text>
                        <Card.Footer className="ea-BodyText">
                            <div className="text-right">
                                {/* collapse trigger */}

                                <Button
                                    onClick={() => this.setState({ open: !open })}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    className="ea-Btn-Match">
                                    Request {this.props.user.split(" ")[0]}
                                </Button>

                            </div>

                            <Collapse in={this.state.open}>
                                <div id="example-collapse-text">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default MatchCard;