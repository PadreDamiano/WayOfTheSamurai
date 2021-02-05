/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Message from "./components/Dialogs/Message/Message";
import Friends from "./components/Friends/Friends";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/message' render={() => <Message/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
