import React from 'react';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUserTotalCount,
    unFollow,
    toggleIsFetching
} from "../Redux/userReducer";
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    toggleIsFetching
})(UsersAPIComponent);