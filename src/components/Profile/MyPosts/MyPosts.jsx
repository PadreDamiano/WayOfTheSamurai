/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div classname={classes.posts}>
        <Post messege="It's my first post!" likeCount="10"/>
        <Post messege="Hello!!!" likeCount="30"/>
      </div>
    </div>
  )
}

export default MyPosts;