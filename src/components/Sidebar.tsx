import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { FaRegChartBar } from 'react-icons/fa';
import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.allitems}>
                <div className={classes.item}>
                    <BiSolidContact size={28}/> 
                    <span>Contacts</span>
                </div>
                <div className={classes.item}>
                    <FaRegChartBar size={28}/> 
                    <span>Charts & Maps</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
