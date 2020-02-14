import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom';
import * as actionCreators from '../store/actions/actionCreators'

function Header(props) {

  function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName('homeTab');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  function logout() {
    const user = {
      userId: props.userId
    }
    axios.post('http://localhost:5000/user/logout', user,{

    })
    .then(res => {
      localStorage.removeItem('jsonwebtoken')
      props.logUserOut(res.data)
    })
  }

  return (
    <div id='Header' className="w3-bar w3-grey">
      <h1 className='w3-bar-item'>PiePoker</h1>
      { props.isAuthenticated ? <Link to ={'/account/' + props.userId}><button className="w3-bar-item w3-button"><h2>Your Account</h2></button></Link> : null}
      { props.inGame ? <button className="w3-bar-item w3-button"><h2>Save Game</h2></button> : null}
      { props.isAuthenticated ? <button className="w3-bar-item w3-button" onClick={() => logout()}><h2>Log Out</h2></button> : null}
      { props.isAuthenticated ? null : <button className="w3-bar-item w3-button" onClick={() => openTab("Register")}><h2>Register</h2></button>}
      { props.isAuthenticated ? null : <button className="w3-bar-item w3-button" onClick={() => openTab("Login")}><h2>Login</h2></button>}
      { props.isAuthenticated ? null : <button className="w3-bar-item w3-button" onClick={() => openTab("PlayAsGuest")}><h2>Play As Guest</h2></button>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userR.isAuthenticated,
    inGame: state.userR.inGame,
    userId: state.userR.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: (res) => dispatch(actionCreators.logUserOut(res))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
