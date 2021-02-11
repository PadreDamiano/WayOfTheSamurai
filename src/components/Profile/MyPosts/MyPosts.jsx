/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profileReducer";
import MyPostsContainer from "./MyPostsContainer";

const MyPosts = (props) => {
    let postElement = props.posts.map(post => <Post messege={post.message} likeCount={post.likeCount}
                                                        img={post.img}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={classes.descriptionBlock}>
            My Post
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                          placeholder='Enter your message'/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;