import axios from "axios";
import { FILTER_PRODUCT, GET_PRODUCT } from "./actions-types";

export const getProduct = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3000/Productos`);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
  };
};

export const filterProduct = (type) => {
  return { type: FILTER_PRODUCT, payload: type };
};
