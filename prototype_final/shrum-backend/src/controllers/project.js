"use strict";

const ProjectModel = require("../models/project");

const createProject = async (req, res) => {
    // check if the body of the request contains all necessary properties
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    
    // handle the request
    try {
        let project_params = req.body;
        project_params.tasks = [];
        project_params.creator = req.userId;
        project_params.members = [req.userId];

        // create project in database
        let project = await ProjectModel.create(project_params);

        // return created project
        return res.status(201).json(project);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};


const getProjectInfo = async (req, res) => {
    try {
        let projectSpecifier = req.params.projectId
            .toLowerCase()
            .replace(/-/g, " ");

        // Get project from database
        let project = await ProjectModel.findOne({
                name: RegExp(projectSpecifier, "i")
            }).exec();

        // return project without the tasks
        return res.status(200).json({
            id: project._id,
            name: project.name,
            owner: project.owner,
            members: project.members
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const getProjects = async (req, res) => {
    try {
        let projects = await ProjectModel.find({
            "members": req.userId
        });

        return res.status(200).json(projects.map((project) => {
            return {
                id: project._id,
                name: project.name,
                creator: project.creator,
                members: project.members
            };
        }));  
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message
        })
    }
}

const getTasks = async (req, res) => {
    try {
        let projectSpecifier = req.params.projectId
            .toLowerCase()
            .replace(/-/g, " ");

        console.log(projectSpecifier);

        // Get project from database
        let project = await ProjectModel.findOne({
            name: RegExp(projectSpecifier, "i")
        }).exec();

        // return created project
        return res.status(200).json(project.tasks);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};


const getTaskDetails = async (req, res) => {
    try {
        let projectSpecifier = req.params.projectId
            .toLowerCase()
            .replace(/-/g, " ");

        // Get project info from database with the specified projectId and taskId
        let project = await ProjectModel.findOne(
            {
                name: RegExp(projectSpecifier, "i"),
                "tasks._id": req.params.taskId
            }).exec();

        let task = project.tasks.filter(task => {
            return task._id == req.params.taskId
        });
        
        return res.status(201).json(task);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};


const createTask = async (req, res) => {
    // check if the body of the request contains all necessary properties
    if (Object.keys(req.body).length === 0)
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });

    // handle the request
    try {
        let projectSpecifier = req.params.projectId
            .toLowerCase()
            .replace(/-/g, " ");

        let task = req.body;

        // find project by id and push task in its "tasks" list
        let project = await ProjectModel.findOneAndUpdate(
            {
                name: RegExp(projectSpecifier, "i")
            },
            {
                "$push": {
                    tasks: task
                }
            },
            {
                new: true
            }
        ).exec();

        // return whole task list
        return res.status(201).json(project.tasks);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};


const updateTask = async (req, res) => {
    // check if the body of the request contains all necessary properties
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is empty",
        });
    }

    try {
        let projectSpecifier = req.params.projectId
            .toLowerCase()
            .replace(/-/g, " ");

        // Preserve the task ID (otherwise the task object will have no ID afterwards)
        let update = req.body;
        update._id = req.params.taskId;

        console.log("Updating task " + req.params.taskId);

        // find and update task with id
        let updatedProject = await ProjectModel.findOneAndUpdate(
            {
                name: RegExp(projectSpecifier, "i"),
                "tasks._id": req.params.taskId
            },
            {
                // This operator updates the WHOLE object, not only individual fields
                // TODO: Somehow make this API endpoint more dynamic
                // with respect to the updated fields (e.g. updating only 1 field should be possible)
                "$set": {
                    "tasks.$": update
                }
            },  
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        ).exec();

        // return updated task list
        return res.status(200).json(updatedProject.tasks);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};


const deleteTask = async (req, res) => {
    try {
        let projectSpecifier = req.params.projectId
            .toLowerCase()
            .replace(/-/g, " ");

        // Remove task from the database
        await TaskModel.findOneAndRemove({
            name: RegExp(projectSpecifier, "i"),
            "tasks._id": req.params.taskId
        }).exec();

        // return message that task was deleted
        return res
            .status(200)
            .json({ message: `Task with id${req.params.taskId} was deleted` });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Internal server error",
            message: err.message,
        });
    }
};

const voteTask = async (req, res) => {
    if (!("value" in req.body)) {
        return res.status(400).json({
            error: "Bad Request",
            message: "Missing field 'value'",
        });
    }

    await ProjectModel.findOneAndUpdate(
        {
            name: RegExp(req.params.projectId, "i"),
            "tasks._id": req.params.taskId
        },
        {
            "$push": {
                "tasks.$.votes": {"value": req.body.value, "user": req.userId}
            }
        },  
        {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        }
    ).exec();   
    return res.status(200).json({message: `${req.userId} voted ${req.body.value} for task with id ${req.params.taskId}`});
}

const calculateVotingResult = async (req, res) => {
    let project = await ProjectModel.findOne({
        name: RegExp(req.params.projectId, "i")
    });

    let task = project.tasks.filter(task => {
        return task._id == req.params.taskId
    })[0];

    let sum = 0;
    if (task.votes.length === 0) {
        return res.status(200).json({value: 0});
    }
    
    let len = task.votes.length;
    for (var i = 0; i < len; i++) {
        sum += task.votes[i].value;
    }
    
    let result = sum/len;

    await ProjectModel.findOneAndUpdate(
        {
            name: RegExp(req.params.projectId, "i"),
            "tasks._id": req.params.taskId
        },
        {
            "$set": {
                "tasks.$.value": result,
                "tasks.$.voting_status": "Done"
            }
        },  
        {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        }
    )
    return res.status(200).json({value: result});
};

const openVote = async (req, res) => {
    await ProjectModel.findOneAndUpdate(
        {
            name: RegExp(req.params.projectId, "i"),
            "tasks._id": req.params.taskId
        },
        {
            "$set": {
                "tasks.$.voting_status": "InProgress"
            }
        },  
        {
            new: false,
            useFindAndModify: false,
            runValidators: true,
        }
    )
    return res.status(200).json({message: `Started the vote for task ${req.params.taskId}`});
}

const getMyVote = async (req, res) => {
    let project = await ProjectModel.findOne({
        name: RegExp(req.params.projectId, "i")
    });

    let task = project.tasks.filter(task => {
        return task._id == req.params.taskId
    })[0];

    let len = task.votes.length;
    for(var i = 0; i < len; i++) {
        if (task.votes[i].user == req.userId) {
            return res.status(200).json({myvote: task.votes[i]});
        }
    }
    return res.status(404).json({message: "You didn't vote on this task."});
}

module.exports = {
    createProject,
    getProjectInfo,
    getProjects,
    getTasks,
    getTaskDetails,
    createTask,
    updateTask,
    deleteTask,
    voteTask,
    calculateVotingResult,
    openVote,
    getMyVote
};