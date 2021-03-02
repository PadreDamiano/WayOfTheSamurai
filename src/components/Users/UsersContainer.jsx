import React from 'react';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUserTotalCount,
    unFollow,
    toggleIsFetching
} from "../Profile/Redux/userReducer";
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

/*const mapDispatchToProps = (dispatch) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }

}*/

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    toggleIsFetching
})(UsersAPIComponent);