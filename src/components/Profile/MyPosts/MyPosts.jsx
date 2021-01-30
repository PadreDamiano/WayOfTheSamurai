/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Post from './Post/Post';
import classes from './MyPosts.module.css';


const MyPosts = (props) => {

/*    let postsData = [
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
    ];*/

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