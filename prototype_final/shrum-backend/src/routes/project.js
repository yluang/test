"use strict";

const express = require("express");
const router = express.Router();

const middlewares = require("../middlewares");
const ProjectController = require("../controllers/project");


// Create new project
router.post("/",
    middlewares.checkAuthentication,
    ProjectController.createProject
)

// Return project name and members
router.get(
    "/:projectId", 
    middlewares.checkAuthentication,    
    ProjectController.getProjectInfo
);

// Return all projects of a user
router.get(
    "/", 
    middlewares.checkAuthentication,    
    ProjectController.getProjects
);

// Return project tasks
router.get(
    "/:projectId/tasks",
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    ProjectController.getTasks
);

/**
 * TODO: Implement routes and methods to support the following:
 * - Edit current project
 * - Add member
 * - Remove member
 * - Edit permissions of members (?)
 * - Delete project
 * 
 */

// Return all details about a task
router.get(
    "/:projectId/task/:taskId",
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    ProjectController.getTaskDetails
)

// Create a new task
router.post(
    "/:projectId/task", 
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    middlewares.checkHasCreatePermission,
    ProjectController.createTask
)

// Edit an existing task
router.put(
    "/:projectId/task/:taskId", 
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    middlewares.checkHasCreatePermission,
    ProjectController.updateTask
)

// Create a new task
router.delete(
    "/:projectId/task/:taskId", 
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    middlewares.checkHasCreatePermission,
    ProjectController.deleteTask
)

// Submit a Story-Point Vote for a Task
router.post(
    "/:projectId/task/:taskId/vote",
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    ProjectController.voteTask
)

// Sets voting_status of Task to "Done" + calculate vote result and write it into task.value
router.post(
    "/:projectId/task/:taskId/closevote",
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    middlewares.checkHasCreatePermission,
    ProjectController.calculateVotingResult
)

// Sets voting_status of Task to "InProgress"
router.post(
    "/:projectId/task/:taskId/openvote",
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    middlewares.checkHasCreatePermission,
    ProjectController.openVote
)

router.get(
    "/:projectId/task/:taskId/myvote",
    middlewares.checkAuthentication,
    middlewares.checkIsProjectMember,
    ProjectController.getMyVote
)


module.exports = router;