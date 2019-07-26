import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../../assets/styles/buttons.module.css'; // Import css modules stylesheet as styles

// have hamburger with logo/login next to it (like portal)

const BtnBlue = ({content, spacing}) => {
    const classes = `btn-lg ${spacing} ${styles.btnBlue}`;
    return (
        <Button variant="primary" className={classes}>
            {content}
        </Button>
    )
}

export default BtnBlue;