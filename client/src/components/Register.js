import React from 'react';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
import axios from 'axios'

function Register(props) {

  const [newUser, setNewUser] = useState({})

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  function addNewUser(newUser) {
    axios.post('http://localhost:5000/user/addUser', newUser,{

    })
    .then(res => {
      console.log(res.data)
      props.addNewUser(res.data)
    })
  }

  return (
      <div id='Register' className='homeTab'>
        <input type='text' name='email' placeholder='Email' onChange={handleChange}></input>
        <input type='text' name='username' placeholder='Username' onChange={handleChange}></input>
        <input type='password' name='password' placeholder='Password' onChange={handleChange}></input>
        <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange}></input>
        <button onClick={() => addNewUser(newUser)}>Register</button>
      </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (res) => dispatch(actionCreators.addNewUser(res))
  }
}

export default connect(null,mapDispatchToProps)(Register)
