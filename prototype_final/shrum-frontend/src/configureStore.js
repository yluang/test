import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./redux/reducers";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunkMiddleware
            )
        )
    );

    return store;
}