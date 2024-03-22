import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import Styles from '../Styles/Form.module.css';

const Form = () => {
    return (
        <div className={Styles.Main}>
            <form className={Styles.FormContainer}>
                <h1>Get in touch</h1>
                <div className={Styles.BoldLine}></div>
                <input className={Styles.Name} type='text' placeholder='Your Name' />
                <input className={Styles.Email} type='text' placeholder='Your Email' />
                <textarea className={Styles.Message} placeholder='Your Message' />
                <Link className={Styles.Submit} to={'/success'}><span>Submit</span></Link>
            </form>
        </div>
    );
};

export default Form;