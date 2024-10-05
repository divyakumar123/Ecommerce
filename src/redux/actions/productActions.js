import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// Action to fetch products using Axios
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      const data = response.data;
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }); 
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error: error.message }); 
    }
  };
};
