import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedMovie from "./selectedMovieReducer";
import currentProject from "./currentProjectReducer";
import tasks from "./tasksReducer";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user,
    entities,
    selectedMovie,
    currentProject,
    tasks
})

export default createRootReducer;
