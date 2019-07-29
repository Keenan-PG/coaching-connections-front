import React from 'react';
import Modal from 'react-bootstrap/Modal';
// styles
import cardStyles from '../../assets/styles/cards.module.css'; // Import css modules stylesheet as styles
import textStyles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles

const MatchCardModal = ({name, description, skills}, props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="MatchCardModal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="MatchCardModal">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{name}</h4>
                <p>
                    {description}
                </p>
                <p>
                    {skills}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MatchCardModal;