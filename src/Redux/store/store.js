import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../combine reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const movieStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));