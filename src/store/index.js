// Import necessary functions and middleware from Redux
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

// Import all reducers from the barrel file
import * as reducers from './reducers';

// Construct the Redux store

// Combine all reducers into a single root reducer
const rootReducer = combineReducers(reducers);

// Create a logger middleware with collapsed log output
const logger = createLogger({ collapsed: true });

// Create the Redux store with the root reducer and applied middleware
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// Export the created Redux store as the default export
export default store;
