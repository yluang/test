import TaskService from "../../services/TaskService"

/**
 * Redux actions for data retrieval / editing
 * 
 * 
 * 
 */


/**
 * getTasks
 * @returns tasks: array of individual tasks 
 * 
 */
export function getTasks(projectId) {
    function onSuccess (tasks) {
        return { type: "GETTASKS_SUCCESS", tasks: tasks}
    }

    function onFailure (error) {
        console.log("Error: failed to retrieve tasks from server");
    }

    return async (dispatch) => {
        try {
            let tasks = await TaskService.getTasks(projectId);
            // Dispatch task retrieval
            dispatch(onSuccess(tasks));
        } catch(e) {
            onFailure(e);
        }
    }
}

export function createTask(projectId, taskData) {
    function onSuccess (response) {
        return { type: "CREATETASK_SUCCESS", response: response}
    }

    function onFailure (error) {
        console.log("Error: failed to create new task");
    }

    return async (dispatch) => {
        try {
            let response = await TaskService.createTask(projectId, taskData );

            dispatch(onSuccess(response));
        } catch(e) {
            onFailure(e);
        }
    }
}