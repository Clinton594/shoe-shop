import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
} from "../constants/ProductConstant";

// list of products
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

// Single Product
export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { ...state, loading: true };
      break;
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
      break;
    case PRODUCT_DETAIL_FAILURE:
      return { loading: false, product: [], error: action.payload };
      break;

    default:
      return state;
  }
};
