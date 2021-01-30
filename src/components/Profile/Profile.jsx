/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={classes.item}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
        </div>
    );
}
export default Profile;