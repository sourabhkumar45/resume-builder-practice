import { products, coupons } from "../data/data";
let initialState = {
  products: products,
  coupons: coupons,
  count: 0,
  addedProduct: [],
};
function shopReducer(state = initialState, action) {
  switch (action.type) {
    case "add_to_cart":
      state.addedProduct.push(action.payload);
      return {
        ...state,
        count: state.count + 1,
        addedProduct: state.addedProduct,
      };
    default:
      return state;
  }
}

export default shopReducer;
