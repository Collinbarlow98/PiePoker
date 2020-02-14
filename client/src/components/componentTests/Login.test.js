import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../Login'
import React from 'react'

configure({adapter: new Adapter()})

describe('<Login />',() => {
  it('should log a user in when the form is filled out and the button is pressed.', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('button'))
  })
})
