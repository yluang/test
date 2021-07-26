import HttpService from "./HttpService";

/**
 * Backend Communication to implement the following actions:
 * 
 * - Get all tasks of a project
 * - Add a new task to a project
 * - Edit a task in a project
 * - Delete a task in a project
 * 
 * 
 */

export default class TaskService {
    static baseURL() {
        return "http://localhost:4000/project";
    }

    static getTasks(projectId) {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                `${this.baseURL()}/${projectId}/tasks`,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static createTask(projectId, taskData) {
        return new Promise(async (resolve, reject) => {
            HttpService.post(
                `${this.baseURL()}/${projectId}/tasks`,
                taskData,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus)
                }
            );
        });
    }
}