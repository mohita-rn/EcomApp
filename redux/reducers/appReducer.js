import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_FAVORITES, ADD_PRODUCTS, REMOVE_FROM_FAVORITES } from '../actions/actions';

const initialState = {
  productList: {}, // Your product list
  cartItems: [], // Cart items with quantity
  likedItems: [], // Liked items
};

const appReducer = (state = initialState, action) => {
    console.log('ZOOOO', action);
  switch (action.type) {
    case ADD_PRODUCTS:
      const { products } = action.payload;
      console.log('LIST---', products);
      // Add the products from the API to the productList
      return {
        ...state,
        productList: [...state.productList, ...products],
      };

    case ADD_TO_CART:
      const { product, quantity } = action.payload;
      const existingCartItem = state.cartItems.find((item) => item.product.id === product.id);

      if (existingCartItem) {
        // If the product already exists in the cart, update its quantity
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              product,
              quantity,
            },
          ],
        };
      }

    case REMOVE_FROM_CART:
      const { productId } = action.payload;
      const updatedCartItems = state.cartItems.filter((item) => item.product.id !== productId);
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case ADD_TO_FAVORITES:
      const { product: likedProduct } = action.payload;
      return {
        ...state,
        likedItems: [...state.likedItems, likedProduct],
      };

      case REMOVE_FROM_FAVORITES:
        const { itemId } = action.payload;
        const updatedLikedItems = state.likedItems.filter((item) => item.id !== itemId);
        return {
          ...state,
          likedItems: updatedLikedItems,
        };

    default:
      return state;
  }
};

export default appReducer;
