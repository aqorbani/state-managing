import { CartItem } from "../types/cartTypes";

const initialState: { cart: CartItem[]; total: number } = {
  cart: [],
  total: 0,
};

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const cartReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      const newCart = existingItem
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];

      const total = newCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { cart: newCart, total };
    }

    case REMOVE_FROM_CART: {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      const total = newCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { cart: newCart, total };
    }

    case UPDATE_QUANTITY: {
      const newCart = state.cart
        .map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  action.payload.type === "increase"
                    ? item.quantity + 1
                    : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      const total = newCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { cart: newCart, total };
    }

    default:
      return state;
  }
};
