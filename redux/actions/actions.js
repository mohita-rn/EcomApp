// actions.js

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action creators
export const addProducts = (products) => {
    return {
      type: ADD_PRODUCTS,
      payload: {
        products,
      },
    };
  };

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
    },
  };
};

export const addToFavorites = (product) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: {
      product,
    },
  };
};

export const removeFromFavorites = (productId) => {
    return {
      type: REMOVE_FROM_FAVORITES,
      payload: {
        productId,
      },
    };
  };
