import React from 'react';
import store from "./components/Redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe ( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});



