/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.item}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}
            />
        </div>
    );
}
export default Profile;