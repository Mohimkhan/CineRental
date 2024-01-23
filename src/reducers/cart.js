import { Zoom, toast } from "react-toastify";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const found = state.find((item) => item.id === action.payload.id);
      if (!found) {
        toast.success(`The movie: ${action.payload.title} added to the cart!!!`, {
          position: "bottom-right",
          transition: Zoom
        });
        return [...state, action.payload];
      } else {
        toast.error(`The movie: ${action.payload.title} is already added to the cart!!!`, {
          position: "bottom-right",
          transition: Zoom
        });
        return state;
      }
    }
    case REMOVE_FROM_CART: {
      const newCart = state.filter((cartItem) => cartItem.id !== action.id);

      return newCart;
    }

    default:
      return state;
  }
};
