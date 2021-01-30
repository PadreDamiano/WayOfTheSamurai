/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let postsData = [
        {
            message: "It's my first post!!!",
            likeCount: 10,
            img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
        },
        {
            message: "Hello!!!",
            likeCount: 7,
            img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
        },
        {
            message: "Hi",
            likeCount: 6,
            img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
        }
    ];
    return (
        <div className={classes.item}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
}
export default Profile;