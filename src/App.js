/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Route, {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="arr-wrapper">
                <Header/>
                <Navbar/>
                <div className="arr-wrapper-content">
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
