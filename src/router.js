// Redux Actions
export const CHANGE_PATH = "CHANGE_PATH";
export const changePath = url => ({ type: CHANGE_PATH, payload: url });

// the route reducer
const initialState = {
  tonic: undefined,
  path: undefined,
  id: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PATH:
      const [tonic, path, id] = action.payload.split("/");
      return { tonic, path, id };

    default:
      return state;
  }
};

// init
const getRoute = () => {
  let [path, params] = window.location.hash.split("?");
  path = path.slice(2);
  params = params || "";
  return { path, params };
};
const getHash = () => window.location.hash.slice(2);

export function initRouter(store) {
  window.onhashchange = () => {
    console.log("Route", getRoute());
    store.dispatch(changePath(getHash()));
  };
  if (getHash() === "") window.location.hash = "#/note/C4";
  window.onhashchange();
}
