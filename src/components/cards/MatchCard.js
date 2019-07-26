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
import styles from '../../assets/styles/buttons.module.css'; // Import css modules stylesheet as styles

// have hamburger with logo/login next to it (like portal)

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
 
        return (
            <Col xs={4} 
            className="mt-5">
                <Animated animationInDelay={interval} animationIn="fadeInUp"> 
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="h2 blue py-1">
                                {name}
                            </Card.Title>
                            <Card.Subtitle className="body-text-bold">
                                {title}
                            </Card.Subtitle>
                            <Card.Subtitle className="body-text py-2">
                                {experience} years experience
                            </Card.Subtitle>
                            <Card.Text className="body-text py-2 m-0">
                                <small>
                                    Offering:
                                    <Row className="p-1 pt-4 text-center">
                                    {/* RENDERING SOCIAL ICON w/ Conditional  */}
                                    {offering.includes("Social Connection") ? 
                                        <div className="col card-icons">
                                            <FontAwesomeIcon icon="users" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Social</small></p>
                                        </div> 
                                    : false}
                                    {/* RENDERING ADVICE ICON w/ Conditional*/}
                                    {offering.includes("Advice") ? 
                                        <div className="col card-icons">
                                            <FontAwesomeIcon icon="comments" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Advice</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING UPSKILLING ICON w/ Conditional  */}
                                    {offering.includes("Upskilling") ? 
                                        <div className="col card-icons">
                                            <FontAwesomeIcon icon="book" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Upskilling</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING Professional Guidance ICON w/ Conditional  */}
                                    {offering.includes("Professional Guidance") ? 
                                        <div className="col card-icons">
                                            <FontAwesomeIcon icon="people-carry" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Guidance</small></p>
                                        </div> 
                                    : false}
                                    </Row>
                                </small>



                            </Card.Text>
                            <Card.Footer className="body-text">
                                <div className="text-right">
                                    {/* collapse trigger */}

                                    <Button
                                        onClick={() => this.setState({ open: !open })}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                        className={styles.btnMatch}>
                                        Request {fName}
                                    </Button>

                                </div>
                                <div>                                
                                    <Collapse in={this.state.open}>
                                        <div id="example-collapse-text" className="py-2">
                                            <div className="body-text-bold card-subtitle h6">More info</div>
                                            <div className="body-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.</div>
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