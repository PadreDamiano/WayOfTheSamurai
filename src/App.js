/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Message from "./components/Profile/Dialogs/Message/Message";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store} />}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store} />}/>
                    <Route path='/message'
                           render={() => <Message />}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
