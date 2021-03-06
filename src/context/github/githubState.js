import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USERS,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../Types'

const GibhubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    // dispatch a type back to reducer
    const [ state, dispatch ] = useReducer(GithubReducer, initialState);

    // Search Users

    // Get User

    // Get Repos

    // Clear Users

    // Set Loading

    return <GithubContext.Provider
        value={(
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        )}
    >
        {props.children}
    </GithubContext.Provider>
}