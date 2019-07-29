import React, { Component } from 'react';
// bootstrap
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
//animate
import {Animated} from "react-animated-css";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import cardStyles from '../../assets/styles/cards.module.css'; // Import css modules stylesheet as styles
import textStyles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles
import buttonStyles from '../../assets/styles/buttons.module.css'; // Import css modules stylesheet as styles

class MatchCard extends Component {
    constructor(props, context) {
        super(props,context);

        this.state = {
            open: false,
        }
    }

    render() {
        const { open } = this.state;

        // easy access props
        const name = this.props.user;
        const fName = name.split(" ")[0];
        const title = this.props.title;
        const experience = this.props.experience;
        const offering = this.props.offering;
        const interval = this.props.space;
        const description = this.props.description;
 
        return (
            <Col xs={12} sm={6} lg={4} className="mt-5">
                <Animated animationInDelay={interval} animationIn="fadeInUp"> 
                    <Card className={cardStyles.card}>
                        <Card.Body>
                            <Card.Title className={`${textStyles.h2} blue py-1`}>
                                {name}
                            </Card.Title>
                            <Card.Subtitle className={textStyles.BodyTextBold}>
                                {title}
                            </Card.Subtitle>
                            <Card.Subtitle className={`${textStyles.BodyText} py-2`}>
                                {experience} years experience
                            </Card.Subtitle>
                            <Card.Text className={`${textStyles.BodyText} py-2 m-0`}>
                                    <Row className="p-1 pt-4 text-center">
                                    {/* RENDERING SOCIAL ICON w/ Conditional  */}
                                    {offering.includes("Social Connection") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="users" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Social</small></p>
                                        </div> 
                                    : false}
                                    {/* RENDERING ADVICE ICON w/ Conditional*/}
                                    {offering.includes("Advice") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="comments" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Advice</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING UPSKILLING ICON w/ Conditional  */}
                                    {offering.includes("Upskilling") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="book" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Upskilling</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING Professional Guidance ICON w/ Conditional  */}
                                    {offering.includes("Professional Guidance") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="people-carry" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Guidance</small></p>
                                        </div> 
                                    : false}
                                    </Row>
                            </Card.Text>

                            <Card.Footer className={`${textStyles.BodyText} ${cardStyles.cardFooter}`}>
                                <div className="text-right">
                                    {/* collapse trigger */}
                                    <Button
                                        onClick={() => this.setState({ open: !open })}
                                        aria-controls="desc-text"
                                        aria-expanded={open}
                                        className={buttonStyles.btnMatch}>
                                        Request {fName}
                                    </Button>
                                </div>
                                <div>                                
                                    <Collapse in={this.state.open}>
                                        <div id="desc-text" className="py-2">
                                            <div className={`${textStyles.bodyTextBold} card-subtitle h6"`}>More info</div>
                                            <div className={textStyles.bodyText}>{description}</div>
                                        </div>
                                    </Collapse>
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Animated>
            </Col>
        )
    }
}

export default MatchCard;