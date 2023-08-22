import React from 'react';
import { ContactState, contactActions } from '../store/index';
import classes from './Contact.module.css';
import { Link } from 'react-router-dom';

import {useDispatch} from 'react-redux';

const Contact = (props: any) => {
    const contact: ContactState = props.contact;
    const dispatch = useDispatch();
    const link = "/editcontact/" + contact.id
    
    const deleteHandler = () => {
        dispatch(contactActions.deleteContact(contact))
    }

    return (
        <div className={classes.contactContainer}>
            <div className={classes.first}>{contact.firstName}</div>
            <div className={classes.second}>{contact.lastName}</div>
            <Link to={link}><button className={classes.btnEdit}>Edit</button></Link>
            <button className={classes.btnDanger} onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Contact;