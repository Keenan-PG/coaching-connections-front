import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
//animate
import {Animated} from "react-animated-css";

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

        // easy acces props
        const name = this.props.user;
        const fName = name.split(" ")[0];
        const title = this.props.title;
        const experience = this.props.experience;
        const offering = this.props.offering;
        const interval = this.props.space;

        // func to add commmas/spaces
        const offeringStr = (offeringArr) => offeringArr.join(", ");

        const renderOfferings = (offeringArr) => {
            const mentoring = offeringArr.includes("Mentoring");
            const upskilling = offeringArr.includes("Upskilling");
            const lifeAdvice = offeringArr.includes("Life advice");

            const arr = [ mentoring, upskilling, lifeAdvice ];

            return arr;
        }
 
        return (
            <Col xs={4} 
            className="mt-5">
                <Animated animationInDelay={interval} animationIn="fadeInUp"> 
                    <Card className="ea-Card">
                        <Card.Body>
                            <Card.Title className="ea-H2 ea-Blue py-1">
                                {name}
                            </Card.Title>
                            <Card.Subtitle className="ea-BodyText-Bold">
                                {title}
                            </Card.Subtitle>
                            <Card.Subtitle className="ea-BodyText py-2">
                                {experience} years experience
                            </Card.Subtitle>
                            <Card.Text className="ea-BodyText py-2 m-0">
                                <small>
                                    Offering:
                                    <Row className="p-1 pt-4 text-center">
                                    {/* RENDERING SOCIAL ICON w/ Conditional  */}
                                    {offering.includes("Social Connection") ? 
                                        <div className="col icons">
                                            <FontAwesomeIcon icon="users" size="2x"></FontAwesomeIcon>
                                            <p><small className="ea-Black">Social</small></p>
                                        </div> 
                                    : false}
                                    {/* RENDERING ADVICE ICON w/ Conditional*/}
                                    {offering.includes("Advice") ? 
                                        <div className="col icons">
                                            <p>Hello</p>
                                            <FontAwesomeIcon icon="comments" size="2x"></FontAwesomeIcon>
                                            <p><small className="ea-Black">Advice</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING UPSKILLING ICON w/ Conditional  */}
                                    {offering.includes("Upskilling") ? 
                                        <div className="col icons">
                                            <FontAwesomeIcon icon="book" size="2x"></FontAwesomeIcon>
                                            <p><small className="ea-Black">Upskilling</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING MENTORING ICON w/ Conditional  */}
                                    {offering.includes("Mentoring") ? 
                                        <div className="col icons">
                                            <FontAwesomeIcon icon="people-carry" size="2x"></FontAwesomeIcon>
                                            <p><small className="ea-Black">Mentoring</small></p>
                                        </div> 
                                    : false}
                                    </Row>
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
                                        Request {fName}
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
                </Animated>
            </Col>
        )
    }
}

export default MatchCard;