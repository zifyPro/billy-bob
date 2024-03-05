import { FILTER_PRODUCT, GET_PRODUCT } from "./actions-types";

let initialState = {
  allProduct: [],
  product: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, allProduct: action.payload, product: action.payload };

    case FILTER_PRODUCT:
      const copyFilter = [...state.allProduct];
      const response = [
        ...copyFilter.filter((elem) => {
          return (
            elem.type &&
            elem.type
              .split(",")
              .map((elem) => elem.trim())
              .includes(action.payload)
          );
        }),
      ];
      return {
        ...state,
        product: response,
      };
    default:
      return state;
  }
};
export default reducer;
