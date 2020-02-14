import React from 'react';
import Shop from './Shop';
import { useState, useEffect } from 'react';

function Footer(props) {
  return(
    <footer className='Footer'>
      <Shop />
      <p>Created By: Collin Barlow</p>
    </footer>
  )
}

export default Footer
