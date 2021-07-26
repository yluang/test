import ProjectService from "../../services/ProjectService";

/**
 * Redux Action: Create new project
 * @param {object} project : Packed project data, containing at least the project name
 * @returns project action result
 */
export function createProject(projectData) {
    function onSuccess(project) {
        return { type: "CREATEPROJECT_SUCCESS", project: project };
    }
    function onFailure(error) {
        console.log("Create new project failure", error);
    }

    return async (dispatch) => {
        try {
            // Create project on backend and fetch its full structure
            // this includes the server-generated project ID
            let project = await ProjectService.createProject(projectData);

            // Dispatch state change in redux
            dispatch(onSuccess(project));
        } catch (e) {

            // Do not change state when a failure occured
            onFailure(e);
        }
    };
}

export function getProject(projectSpecifier) {

    function onSuccess(project) {
        return { type: "GETPROJECT_SUCCESS", project: project };
    }
    // when the backend call failed
    function onFailure(error) {
        console.log("Error: failed to retrieve project data from server");
    }

    return async (dispatch) => {
        try {
            console.log("Fetching projects from backend...");

            // Fetch project from backend
            let project = await ProjectService.getProject(projectSpecifier);

            // call onSuccess in context of redux
            dispatch(onSuccess(project));

        } catch (e) {
            onFailure(e);
        }
    };
}

