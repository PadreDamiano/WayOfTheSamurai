import {NavLink} from "react-router-dom";
import React from "react";
import classes from "./DialogsItem.module.css"

const DialogsItem = (props) => {
    return (
        <div className={classes.dialog}>
                <NavLink activeClassName={classes.active} to={"/dialogs/" + props.id}>
                    <img className={classes.img}  src={props.img} alt="IMG"/>
                    {props.name}
                </NavLink>
        </div>
    )
}
export default DialogsItem;

