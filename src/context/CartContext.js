import React, { useState, useReducer, createContext } from 'react';

import airMaxShoe from '../img/shoes/Nike air max main.png';
import airMax90 from '../img/shoes/air-max-90-flyease.png';
import airMax270 from '../img/shoes/air-max-270-react-se.png';
import airZoom from '../img/shoes/air-zoom-pegasus-37.png';
import airCosmic from '../img/shoes/cosmic-unity.png';

const shoeInfo = [
  {
    id: 1,
    name: 'AIR COSMIC MAX',
    stars: 5,
    price: '$189',
    desc: "Men's Sneakers",
    img: airCosmic,
  },
  {
    id: 2,
    name: 'AIR MAX PEGASUS 37',
    stars: 4,
    price: '$289',
    desc: "Women's running shoe",
    img: airMax90,
  },
  {
    id: 3,
    name: 'AIR MAX 270',
    stars: 5,
    price: '$489',
    desc: "Men's running shoe",
    img: airMax270,
  },
  {
    id: 4,
    name: 'AIR ZOOM',
    stars: 3,
    price: '$189',
    desc: "Women's running shoe",
    img: airZoom,
  },
];

const initialCartState = {
  shoeInfo: shoeInfo,
  items: [
    {
      id: 1,
      name: 'AIR COSMIC MAX',
      stars: 5,
      price: '$189',
      desc: "Men's Sneakers",
      img: airCosmic,
    },
  ],
  totalAmount: 0,
};

function reducer(state, action) {
  if (action.type === 'ADD') {
    const updatedItems = [...state.items, action.item];
    console.log(updatedItems);
    return { shoeInfo: shoeInfo, items: updatedItems, totalAmount: 0 };
  }

  return initialCartState;
}

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(reducer, initialCartState);

  function addItemToCart(item) {
    dispatchCartAction({ type: 'ADD', item });
  }

  function removeItemFromCart(id) {
    dispatchCartAction({ type: 'REMOVE', id });
  }
  const cartContext = {
    shoeInfo: cartState.shoeInfo,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
