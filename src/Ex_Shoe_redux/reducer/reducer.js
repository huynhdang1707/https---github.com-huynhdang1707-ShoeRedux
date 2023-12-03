import { shoeArr } from "../data";
import { ADD, DELETE, TANG, GIAM } from "./constant";

let initialState = {
  shoeArr: shoeArr,
  cart: [],
};

export let shoeReducer = (state = initialState, { type, payload }, action) => {
  switch (type) {
    case ADD: {
      let cloneCart = [...state.cart];
      console.log(payload.id);
      let index = cloneCart.findIndex((item) => item.id === payload.id);
      console.log(index);
      if (index === -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }

      state.cart = cloneCart;
      return { ...state };
    }
    case DELETE: {
      let newCart = state.cart.filter((item) => item.id != payload);

      return { ...state, cart: newCart };
    }
    case GIAM: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === payload.id);
      if (index === -1) {
        return;
      } else {
        if(cloneCart[index].soLuong === 1) {
          let newCart = state.cart.filter((item) => item.id !== payload.id);
          return { ...state, cart: newCart };
        }
        cloneCart[index].soLuong--;
      }
      state.cart = cloneCart;
      return { ...state };
    }
    default:
      return state;
  }
};

// rxreducer
