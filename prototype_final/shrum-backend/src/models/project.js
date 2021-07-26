"use strict";

const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
    value: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

const TaskSchema = new mongoose.Schema({
    // Task title
    title: {
        type: String,
        required: true,
    },
    
    // Optional description string
    description:  String,

    // Task status can only be in these 6 different states
    // After creation, a task is in backlog by default
    status: {
        type: String,
        enum: ["Backlog", "ToDo", "InProgress", "InReview", "Done", "Archived"],
        default: "Backlog"
    },

    // If a task is in progress, it contains an Assignee
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // During review, a task has a Reviewer
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // The value of the task in StoryPoints
    value: Number,

    // Mode to vote the story points for this ticket
    votingOption: {
        type: String,
        enum: ["Manual", "Live", "Deadline"],
        default: "Live"
    },

    // Current status off the vote.
    // Bevor: The voting time has not yet started.
    // InProgress: It is currently possible to vote.
    // Done: The final value has been calculated and written.
    voting_status: {
        type: String,
        enum: ["Bevor", "InProgress", "Done"],
        default: "Bevor"
    },

    votes: [VoteSchema],
});

const ProjectSchema = new mongoose.Schema({

    // Project name
    name: {
        type: String,
        unique: true,
        required: true
    },

    // Each project has an owner who has full permissions
    // This is a 'foreign key' in NoSQL, this way we store user IDs
    // (Reference to a document in the Users collection)
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // List of members (again only references)
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    // List of tasks that are associated to this project
    tasks: [TaskSchema],
});

ProjectSchema.set("timestamps", true);
ProjectSchema.set("versionKey", false);

// Export the Movie model

/*
module.exports = {
    project: mongoose.model("Project", ProjectSchema),
    task: mongoose.model("Task", TaskSchema)
};
*/

module.exports = mongoose.model("Project", ProjectSchema);