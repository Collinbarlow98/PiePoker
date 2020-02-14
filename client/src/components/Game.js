import React from 'react';
import PiePoker from './PiePoker';
import Upgrade from './Upgrade';
import { useState, useEffect } from 'react';

function Game(props) {
  return (
    <div className='GamePage'>
      <PiePoker />
      <Upgrade />
    </div>
  )
}

export default Game;
