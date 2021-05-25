import { ADDTOCART } from "./constants";
export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADDTOCART:
      state.shift();
      return [...state, { cartData: action.data }];

    default:
      return state;
  }
}
