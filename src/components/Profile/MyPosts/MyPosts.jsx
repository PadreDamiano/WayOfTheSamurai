/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post messege="It's my first post!" likeCount="10"/>
        <Post messege="Hello!!!" likeCount="30"/>
      </div>
    </div>
  )
}

export default MyPosts;