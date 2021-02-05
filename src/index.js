import React from 'react';
import store from "./components/Redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



