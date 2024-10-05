// src/redux/reducers/productReducer.js
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../actions/productActions";

const initialState = {
  loading: false,
  products: [], // Ensure this matches what you access in useSelector
  error: '',
};

// Product reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload, // Payload should update products array
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error, // Handle the error state
      };
    default:
      return state;
  }
};

export default productReducer;
