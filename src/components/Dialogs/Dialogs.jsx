import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    Vitaliy
                </div>
                <div className={classes.dialog}>
                    Natalie
                </div>
                <div className={classes.dialog}>
                    Cristi
                </div>
                <div className={classes.dialog}>
                    George
                </div>
                <div className={classes.dialog}>
                    Ann
                </div>
                <div className={classes.dialog}>
                    Fillip
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hello
                </div>
                <div className={classes.message}>
                    How are you?
                </div>
                <div className={classes.message}>
                    My name is Natalie
                </div>
                <div className={classes.message}>
                    Good day
                </div>
                <div className={classes.message}>
                    Goodbye
                </div>
            </div>
        </div>
    )
}
export default Dialogs;