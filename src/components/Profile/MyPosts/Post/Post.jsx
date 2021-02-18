/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img src={props.img} className={classes.img} alt="IMG" />
                {props.messege}
            </div>
            <div>
                LIKE: {props.likeCount}
            </div>
        </div>)
}

export default Post;