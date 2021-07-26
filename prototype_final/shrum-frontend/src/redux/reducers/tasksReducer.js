export default function tasks(state = {}, action) {
    switch (action.type) {
        case "GETTASKS_SUCCESS":
            return { tasks: action.tasks };
        case "ADDTASK_SUCCESS":
            return { tasks: action.tasks };
        case "EDITTASK_SUCCESS":
            return { tasks: action.tasks };
        case "ADDMOVIE_SUCCESS":
            return { ...state };
        default:
            return state;
    }
}