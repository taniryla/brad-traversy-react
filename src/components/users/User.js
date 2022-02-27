import React, { useEffect, useState, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ( { user, getUser, getUserRepos, repos, match, loading }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

    const {
        avatar_url,
        login,
        html_url,
        followers_url,
        following_url,
        repos_url,
        gists_url,
        hireable
    } = user;


    if (loading) return <Spinner />;

    return (
      <Fragment>
          <Link to='/' className='btn btn-light'>
              Back To Search
          </Link>
          Hireable: {' '}
          {hireable ? <i className="fas fa-check text-succeess" /> : <i className="fas fa-times-circle text-danger" /> }
          <div className="card grid-2">
              <div className="all-center">
                  <img 
                    src={avatar_url} 
                    className="round-img"  
                    alt=''
                    style={{ width: '150px' }}
                  />
                <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
              </div>
              <ul>
                  <li>
                      {login && <Fragment>
                          <strong>Username:</strong> {login}
                          </Fragment>}
                  </li>
              </ul>
          </div>
          <div className="card text-center">
              <div className="badge badge-primary">Followers: {followers_url}</div>
              <div className="badge badge-success">Following: {following_url} </div>
              <div className="badge badge-light">Public Repos: {repos_url} </div>
              <div className="badge badge-dark">Public Gist: {gists_url} </div>
          </div>
          <Repos repos={repos} />
      </Fragment>
    )
  }



export default User