// Redux Actions
export const CHANGE_PATH = "CHANGE_PATH";
export const changePath = url => ({ type: CHANGE_PATH, payload: url });

// init
const getRoute = hash => {
  hash = hash || window.location.hash;
  const decoded = hash
    .split("?")[0]
    .slice(2)
    .replace(/_/g, " ")
    .split("/");
  const [note, path, id] = decoded;
  return { note, path, id };
};
const getHash = () => window.location.hash.slice(2);

// the route reducer
const initialState = {
  note: undefined,
  path: undefined,
  id: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PATH:
      return getRoute(action.payload);

    default:
      return state;
  }
};

export function setHash(hash) {
  window.location.hash = hash;
}

const slash = o => (o ? "/" + o : "");

export const routeToHash = (note, path, id) =>
  ("#" + slash(note) + slash(path) + slash(id)).replace(/ /g, "_");

export function setRoute(note, path, id) {
  setHash(routeToHash(note, path, id));
}

export function initRouter(store) {
  window.onhashchange = () => {
    store.dispatch(changePath(window.location.hash));
  };
  if (getHash() === "") setHash("#/C4");
  window.onhashchange();
}
