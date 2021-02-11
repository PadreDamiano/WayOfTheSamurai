/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.item}>
            <div>
                <img src="https://drugoy.com.ua/uploads/blog/41e4d-kilimandzharo_vysochayshaja_vershina_afriki_kilimanjaro-2.jpg" className={classes.img}
                     alt="Text"/>
            </div>
            <div className={classes.descriptionBlock}>
                Ava+Description
            </div>
        </div>
    );
}
export default ProfileInfo;