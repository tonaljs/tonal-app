import { createStore } from "redux";
import { CHANGE_PATH } from "./actions";

const initialState = {
  path: "#"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PATH:
      return { ...state, path: action.payload };

    default:
      return state;
  }
};

export default createStore(reducer);
