import { GET_PRODUCT } from "./actions-types";

let initialState = {
  allProduct: [],
  product: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, allProduct: action.payload, product: action.payload };

    default:
      return state;
  }
};
export default reducer;
