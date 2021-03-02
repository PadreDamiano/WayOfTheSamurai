import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setUserTotalCountActionCreator,
    unFollowActionCreator
} from "../Redux/userReducer";
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUserCount: (totalUserCount) => {
            dispatch(setUserTotalCountActionCreator(totalUserCount))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);