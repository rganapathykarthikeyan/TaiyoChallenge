import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { FaRegChartBar } from 'react-icons/fa';
import classes from "./Sidebar.module.css";
import { Link } from 'react-router-dom'

//Sidebar is created with Link from react-router-dom for navigation

const Sidebar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.allitems}>
                <Link to='/' className={classes.item}>
                    <BiSolidContact size={28}/> 
                    <span className={classes.name}>Contacts</span>
                </Link>
                <Link to='/chart' className={classes.item}>
                    <FaRegChartBar size={28}/> 
                    <span className={classes.name}>Charts & Maps</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;
