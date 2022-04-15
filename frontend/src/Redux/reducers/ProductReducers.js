import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from "../constants/ProductConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
      break;
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
      break;
    case PRODUCT_LIST_FAILURE:
      return { loading: false, products: [], error: action.payload };
      break;

    default:
      return state;
  }
};

export default productListReducer;
