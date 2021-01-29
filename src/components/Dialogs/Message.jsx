import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <NavLink to={"/message/" + props.id}>{props.message}</NavLink>
        </div>
    )
}
export default Message;

