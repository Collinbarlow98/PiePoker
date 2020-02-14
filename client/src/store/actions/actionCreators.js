import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addNewUser = (res) => {
  return {
    type: actionTypes.ADD_NEW_USER,
    res: res
  }
}

export const logUserIn = (res) => {
  return {
    type: actionTypes.LOG_USER_IN,
    res: res
  }
}

export const logUserOut = (res) => {
  return {
    type: actionTypes.LOG_USER_OUT,
    res: res
  }
}

export const playAsGuest = (guest) => {
  return {
    type: actionTypes.PLAY_AS_GUEST,
    gameName: guest.guestGame
  }
}

export const getGames = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/user/login')
    .then(res => dispatch(getGamesActionCreators(res)))
  }
}
