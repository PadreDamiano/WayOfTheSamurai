/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="arr-wrapper">
            <Header/>
            <Navbar/>
            <div className="arr-wrapper-content">
                <Dialogs/>
                {/*<Profile />*/}
            </div>
        </div>
    )
}

export default App;
