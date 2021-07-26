import HttpService from "./HttpService";

/**
 * Backend Communication to implement the following actions:
 * 
 * - Create a new project
 * - Edit the settings of a project
 * - Add / edit / remove team members
 * - Delete a project
 * 
 */

 export default class ProjectService {
    static baseURL() {
        return "http://localhost:4000/project";
    }

    static getProject(projectSpecifier) {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                `${this.baseURL()}/${projectSpecifier}`,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static getProjects() {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                this.baseURL(),
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            )
        })
    }

    static createProject(projectData) {
        return new Promise(async (resolve, reject) => {
            HttpService.post(
                this.baseURL(),
                projectData,
                function(data) {
                    resolve(data);
                },
                function(textStatus) {
                    reject(textStatus);
                }
            )
        })
    }

}