import { createStore, combineReducers } from "redux";
import { todo } from "./todos/reducers";

const reducers = { todo };

const rootReducer = combineReducers(reducers);
export const configureStore = () => createStore(rootReducer);
