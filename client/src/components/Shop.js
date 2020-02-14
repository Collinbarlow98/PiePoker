import React from 'react';
import { useState, useEffect } from 'react';

function Shop(props) {
  return (
    <div id='Shop'>
      <p className='ShopPrices'>Purchase Pie</p>
      <p className='ShopPrices'>1000 Pies = 1$</p>
      <p className='ShopPrices'>10000 Pies = 10$</p>
      <p className='ShopPrices'>100000 Pies = 100$</p>
      <p className='ShopPrices'>Purchase items</p>
      <p className='ShopPrices'>1 Poker = 1$</p>
      <p className='ShopPrices'>1 Baker = 3$</p>
      <p className='ShopPrices'>1 Cafe = 5$</p>
      <p className='ShopPrices'>1 Factory = 10$</p>
    </div>
  )
}

export default Shop
