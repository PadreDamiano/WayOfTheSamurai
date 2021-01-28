/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={classes.item}>
          <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" className={classes.img} alt="Text"/>
         {props.messege}
          <div>
          <span>LIKE {props.likeCount}</span>
          </div>
    </div>)
}

export default Post;