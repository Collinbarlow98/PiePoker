import * as actionTypes from '../actions/actionTypes'

const initialState = {
  userId: null,
  username: null,
  isAuthenticated: false,
  inGame: false,
  gameName: null,
  message: ''
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_NEW_USER:

      return {
        ...state,
        message: action.res.message
      }

    case actionTypes.LOG_USER_IN:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.res.userId,
        username: action.res.username,
        message: action.res.message
      }

    case actionTypes.LOG_USER_OUT:

      return {
        userId: null,
        isAuthenticated: false,
        inGame: false,
        message: action.res.message
      }

    case actionTypes.PLAY_AS_GUEST:
      return {
        ...state,
        message: 'Playing As Guest',
        inGame: true,
        gameName: action.res.gameName
      }

  }

  return state
}

export default reducer
