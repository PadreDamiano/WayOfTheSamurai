/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.item}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
}
export default Profile;