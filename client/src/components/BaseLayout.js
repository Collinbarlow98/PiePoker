import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function BaseLayout(props) {
  return (
    <div className='BaseLayout'>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default BaseLayout
