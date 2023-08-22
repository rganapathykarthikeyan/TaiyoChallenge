import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { FaRegChartBar } from 'react-icons/fa';
import classes from "./Sidebar.module.css";
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.allitems}>
                <Link to='/' className={classes.item}>
                    <BiSolidContact size={28}/> 
                    <span>Contacts</span>
                </Link>
                <Link to='/chart' className={classes.item}>
                    <FaRegChartBar size={28}/> 
                    <span>Charts & Maps</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;
