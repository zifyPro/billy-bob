import axios from "axios";
import { GET_PRODUCT } from "./actions-types";

export const getProduct = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3000/Productos`);
    console.log("maaaaaaaaaaaaaaaaaaaaaaaaaaa", response.data);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
  };
};
