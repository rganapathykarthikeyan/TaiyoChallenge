import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import classes from './EditContact.module.css';

import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import { useParams } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import { contactActions, ContactListState, ContactState } from '../store/index';

const EditContact = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contactList = useSelector((state: ContactListState) => state.contacts)

    const params = useParams();
    // We get the id of the contact we need to edit with the useParams hook from router
    const contactId:any = params.id;

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
        const ContactItem:ContactState = {
          id: +contactId,
          firstName: fname,
          lastName: sname,
          Status: isActive,
        };
        dispatch(contactActions.editContact(ContactItem));
        navigate('/');
    }

    useEffect(()=> {
        const filteredContact = contactList.filter((item) => { return item.id === +contactId});
        setFname(filteredContact[0].firstName);
        setSname(filteredContact[0].lastName);
        setActive(filteredContact[0].Status);
    },[])

    return (
        <>
        <Sidebar></Sidebar>
        <div className={classes.mainContainer}>
        <div className={classes.title}>AddContact</div>
            <form onSubmit={onSubmitHandler}>
            <div className={classes.formContainer}>
            <div className={classes.formContent}>
                <label>First Name:</label>
                <input type='text' onChange={fnameChangeHandler} value={fname} className={classes.inputField}/>
            </div>
            <div className={classes.formContent}>
                <label>Second Name:</label>
                <input type='text' onChange={snameChangeHandler} value={sname} className={classes.inputField}/>
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

export default EditContact;