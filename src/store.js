import { createStore, combineReducers } from "redux";
import { reducer as routeReducer } from "./router";
import { CHANGE_PATH } from "./actions";

const pathReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE_PATH:
      return action.payload;

    default:
      return state;
  }
};

const reducer = combineReducers({
  path: pathReducer,
  route: routeReducer
});

export default createStore(reducer);
