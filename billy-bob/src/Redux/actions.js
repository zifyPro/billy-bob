import axios from "axios";
import { GET_PRODUCT } from "./actions-types";

export const getProduct = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/Productos`);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
  };
};
