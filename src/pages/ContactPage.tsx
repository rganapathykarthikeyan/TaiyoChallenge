import React from 'react'
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ContactListState } from '../store/index';
import Contact from '../components/Contact';

import classes from './ContactPage.module.css'

const ContactPage = () => {

  const contactList = useSelector((state: ContactListState) => state.contacts)
  return (
    <>
      <Sidebar></Sidebar>
      <div className={classes.mainContainer}>
        <div className={classes.title}>ContactPage</div>
        <Link to='/addcontact'><button className={classes.btnAdd}>Add Contact</button></Link>
        <div className={classes.listContainer}>
          {contactList.length !== 0 ? (contactList.map((contactitem) => <Contact contact={contactitem} key={contactitem.id} />)) : 
          (<div className={classes.noContact}>
              <h2>No Contacts Found</h2>
              <h4>Please add contact from Create Contact Button</h4>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactPage;
