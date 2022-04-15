import axios from "axios";
import routes from "../../constants/routes";
import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstant";

export const listProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    const { data } = await axios.get(routes.api.products);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
