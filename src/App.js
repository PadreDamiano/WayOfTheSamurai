/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Message from "./components/Dialogs/Message/Message";
import Friends from "./components/Friends/Friends";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="arr-wrapper">
                <Header/>
                <Navbar/>
                <div className="arr-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  addPostsData={props.addPostsData}/>}/>
                    <Route path='/message' render={() => <Message/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
