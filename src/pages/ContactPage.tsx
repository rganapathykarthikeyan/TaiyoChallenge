import React from 'react'
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div>ContactPage</div>
      <Link to='/addcontact'><button>Add Contact</button></Link>
    </>
  )
}

export default ContactPage;
