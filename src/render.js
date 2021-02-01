import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostsData} from "./components/Redux/state";

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostsData={addPostsData}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;