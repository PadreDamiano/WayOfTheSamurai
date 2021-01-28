/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.item}>
            <img src="https://drugoy.com.ua/uploads/blog/41e4d-kilimandzharo_vysochayshaja_vershina_afriki_kilimanjaro-2.jpg" className={classes.img}
                 alt="Text"/>
            <div>
                Ava+Description
            </div>
            <MyPosts/>
        </div>
    );
}
export default Profile;