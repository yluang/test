export default function currentProject(state = {}, action) {
    switch (action.type) {
        case "CREATEPROJECT_SUCCESS": 
            return { project: action.project };
        case "GETPROJECT_SUCCESS":
            return { project: action.project };
        case "GETPROJECT_ERROR":
            return { error: action.error };
            
        // Not implemented or tested yet
        case "CHANGE_CURRENT_PROJECT":
            return {
                project: {
                    ...state.project,
                    ...action.updates,
                },
            };
        default:
            return state;
    }
}