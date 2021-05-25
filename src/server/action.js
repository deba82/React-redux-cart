import { ADDTOCART } from "./constants";
export const addToCart = (data) => {
  return {
    type: ADDTOCART,
    data: data,
  };
};
