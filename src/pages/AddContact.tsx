import React from 'react'
import Sidebar from '../components/Sidebar';
import classes from './AddContact.module.css'

import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';
import { contactActions, ContactListState, ContactState } from '../store/index';

const AddContact = () => {

  const dispatch = useDispatch();
  const contactList = useSelector((state: ContactListState) => state.contacts);
  const navigate = useNavigate()

  const [fname, setFname] = useState<string>('');
  const [sname, setSname] = useState<string>('');
  const [isActive, setActive] = useState<boolean>(false);


  const ActiveStatus = (event: React.ChangeEvent<HTMLInputElement>)=> {
    if(event.target.value === 'Active'){
      setActive(true)
    }
    if(event.target.value === 'NotActive'){
      setActive(false)
    }
  }

  const fnameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFname(event.target.value)
  }
  const snameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSname(event.target.value)
  }

  const onSubmitHandler = (event: any) => {
    event.preventDefault()
    let ids;
    if(contactList.length === 0){
      ids=-1;
    }
    else{
      ids = contactList[contactList.length-1].id
    }
    const ContactItem:ContactState = {
      id: ids+1,
      firstName: fname,
      lastName: sname,
      Status: isActive,
    };
    dispatch(contactActions.addcontact(ContactItem));
    navigate('/');
  }

  return (
  <>
    <Sidebar></Sidebar>
    <div className={classes.mainContainer}>
      <div className={classes.title}>AddContact</div>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.formContainer}>
          <div className={classes.formContent}>
            <label>First Name:</label>
            <input type='text' onChange={fnameChangeHandler} className={classes.inputField}/>
          </div>
          <div className={classes.formContent}>
            <label>Second Name:</label>
            <input type='text' onChange={snameChangeHandler} className={classes.inputField}/>
          </div>
          <div className={classes.formContent}>
            <label>Status:</label>
            <input type='radio' name='Active' value='Active' checked={isActive} onChange={ActiveStatus} /> Active
            <input type='radio' name='NotActive' value='NotActive' checked={!isActive}  onChange={ActiveStatus}/> Not Active
          </div>
        </div>
        <button type='submit' className={classes.btnAdd}>Save Contact</button>
      </form>
    </div>
  </>
  )
}

export default AddContact;