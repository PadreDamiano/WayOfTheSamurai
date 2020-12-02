/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://asiamountains.net/upload/slide/slide-1960x857-07.jpg' />
      </div>
      <div>
        Ava+Description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;