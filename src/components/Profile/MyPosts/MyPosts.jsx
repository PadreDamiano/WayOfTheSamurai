/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/state";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        newPostElement.current.value = '';
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let postElement = props.postsData.map(post => <Post messege={post.message} likeCount={post.likeCount}
                                                        img={post.img}/>);
    return (
        <div className={classes.descriptionBlock}>
            My Post
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;