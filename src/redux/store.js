// src/redux/store.js
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import productReducer from "./reducers/productReducer";
import {thunk} from "redux-thunk"; // Correct import for redux-thunk

// If you want to add more reducers in the future, use combineReducers
const rootReducer = combineReducers({
  products: productReducer,  // You can add more reducers here
});

// Set up Redux DevTools and middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Apply middleware and dev tools
);

export default store;
