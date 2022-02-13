import React, { useState, useReducer, createContext } from 'react';

import shoeImg from '../img/Nike air max main.png';

const shoeInfo = [
  {
    id: 1,
    name: 'AIR MAX 90 FLYEASE',
    stars: 5,
    price: '$189',
    desc: "Men's Sneakers",
    img: shoeImg,
  },
  {
    id: 2,
    name: 'AIR MAX PEGASUS 37',
    stars: 4,
    price: '$289',
    desc: "Women's running shoe",
    img: shoeImg,
  },
];

const initialCartState = [
  {
    id: 1,
    name: 'AIR MAX 90 FLYEASE',
    stars: 4,
    price: '$189',
    desc: "Men's Sneakers",
  },
];

function reducer(state, action) {}

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, dispatchCartItems] = useReducer(reducer, '');

  function addItemToCart() {}

  return (
    <CartContext.Provider value={[shoeInfo, cartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
