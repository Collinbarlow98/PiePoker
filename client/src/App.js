import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actionCreators from './store/actions/actionCreators'

function App(props) {

  const [guest, setGuest] = useState({})

  const handleChange = (e) => {
    setGuest({
      [e.target.name]: e.target.value
    })
  }

  function playAsGuest() {
    props.playAsGuest(guest)
  }

  return (
    <div className='HomePage'>
      { props.isAuthenticated ? null : <Register />}
      { props.isAuthenticated ? null : <Login />}
      <div id='PlayAsGuest' className='homeTab' style={{display: 'none'}}>
        { props.isAuthenticated ? null : <input type='text' name='guestGame' placeholder='Game Name' onChange={handleChange}></input>}
        { props.isAuthenticated ? null : <Link to = '/game'><button onClick={() => playAsGuest()}>Play As Guest</button></Link>}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    playAsGuest: (guest) => dispatch(actionCreators.playAsGuest(guest))
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userR.isAuthenticated
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
