import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message";

let dialogsData = [
    {id: 1, name: "Vitaliy"},
    {id: 2, name: "Natalie"},
    {id: 3, name: "Cristi"},
    {id: 4, name: "George"},
    {id: 5, name: "Ann"},
    {id: 6, name: "Fillip"}
];

const DialogsItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogsItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={classes.dialogsItem}>
                <Message id="1" message="OK"/>
                <Message id="2" message="How are you?"/>
                <Message id="3" message="My name is Natalie"/>
                <Message id="4" message="Good day"/>
                <Message id="5" message="Hello"/>
                <Message id="6" message="Goodbye"/>
            </div>
        </div>
    )
};

export default Dialogs;