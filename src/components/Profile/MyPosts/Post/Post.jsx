/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://pbs.twimg.com/profile_images/857551974442651648/D5cZLXTf_400x400.jpg'/>
         {props.messege}
          <div>
          <span>LIKE {props.likeCount}</span>
          </div>
    </div>
  )
}

export default Post;