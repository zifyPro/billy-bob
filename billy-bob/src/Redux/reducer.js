import { GET_PRODUCT } from "./actions-types";

let initialState = {
  product: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, product: action.payload };

    default:
      return state;
  }
};
export default reducer;
