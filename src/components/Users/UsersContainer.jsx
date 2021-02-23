import React from 'react';
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../Redux/userReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unFollow: (userID) => {
            dispatch(unFollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);