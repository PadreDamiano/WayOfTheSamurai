/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Message from "./components/Dialogs/Message/Message";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <ProfileContainer />}/>
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
