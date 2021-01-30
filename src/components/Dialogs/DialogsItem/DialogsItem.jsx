import {NavLink} from "react-router-dom";
import React from "react";
/*
const DialogsItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>
                <img src={props.img} className={classes.img} alt="IMG"/>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogsItem;*/

const DialogsItem = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}>
                <img src={props.img}alt="IMG"/>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogsItem;

