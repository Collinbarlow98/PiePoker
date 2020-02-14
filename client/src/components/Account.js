import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'

function Account(props) {

  useEffect(() => {
    props.getGames()
  },[])

  function yourGamesUl() {

  }

  return (
    <div className='Account'>
      <p>{props.username}</p>
      <ul>
      <label>Your Games</label>
      {yourGamesUl()}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userR.isAuthenticated,
    inGame: state.userR.inGame,
    userId: state.userR.userId,
    username: state.userR.username
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    getGames: () => dispatch(actionCreators.getGames())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);
