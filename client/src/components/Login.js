import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
import axios from 'axios'
import {setAuthHeader} from '../utils/auth'

function Login(props) {

  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function logUserIn(user) {
    axios.post('http://localhost:5000/user/login', user)
    .then(res => {
      const token = res.data.token
      localStorage.setItem('jsonwebtoken',token)
      setAuthHeader(token)
      props.logUserIn(res.data)
    })
  }

  return (
    <div id='Login' className='homeTab' style={{display: 'none'}}>
      <input type='text' name='email' placeholder='Email' onChange={handleChange}></input>
      <input type='password' name='password' placeholder='Password' onChange={handleChange}></input>
      <button onClick={() => logUserIn(user)}>Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: (res) => dispatch(actionCreators.logUserIn(res))
  }
}

export default connect(null,mapDispatchToProps)(Login)
