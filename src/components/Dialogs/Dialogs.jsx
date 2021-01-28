import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog} >
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>Vitaliy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>Natalie</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>Cristi</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}>George</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={classes.active}>Ann</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={classes.active}>Fillip</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    <NavLink to="/message/1">Hello</NavLink>
                </div>
                <div className={classes.message}>
                    <NavLink to="/message/1">How are you?</NavLink>
                </div>
                <div className={classes.message}>
                    <NavLink to="/message/1">My name is Natalie</NavLink>
                </div>
                <div className={classes.message}>
                    <NavLink to="/message/1">Good day</NavLink>
                </div>
                <div className={classes.message}>
                    <NavLink to="/message/1">Goodbye</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;