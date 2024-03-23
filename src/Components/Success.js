import React from 'react';
import { Link } from 'react-router-dom';

// Images 
import Successimage from '../images/success.svg';

// Styles
import Styles from '../Styles/Success.module.scss';

const Success = () => {
    return (
        <div className={Styles.Container}>
            <img className={Styles.Image} src={Successimage} />
            <span>Form Submitted Successfully!</span>
            <p>Thank you! the form has been submitted Successfully. <br /> we weill reply to you soon!</p>
            <Link className={Styles.BacktoForm} to={'/form'}>Go back</Link>
        </div>
    );
};

export default Success;