/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Post from './Post/Post';
import classes from './MyPosts.module.css';


const MyPosts = (props) => {

    let postElement = props.postsData.map (post => <Post messege={post.message} likeCount={post.likeCount} img={post.img}/>);

    return (
        <div className={classes.descriptionBlock}>
            My Post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                { postElement }
            </div>
        </div>
    )
}

export default MyPosts;