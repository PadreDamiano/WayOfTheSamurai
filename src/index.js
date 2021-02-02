import React from 'react';
import state, {addPostsData, upDateNewPostText, subscribe} from "./components/Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPostsData={addPostsData}
                 newPostText={state.profilePage.newPostText}
                 upDateNewPostText={upDateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
subscribe (rerenderEntireTree);
rerenderEntireTree (state);


