import { combineReducers, createStore } from "redux";

import application from "./reducers/application";
import post from "./reducers/post";
import comment from "./reducers/comment";

const stateReducer = combineReducers({
    application,
    post,
    comment,
});

const store = createStore(
    stateReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
