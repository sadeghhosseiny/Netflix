import { createStore } from "redux";
import { rootReducer } from "../combine reducers/combineReducers";

export const movieStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());