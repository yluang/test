import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";

import TaskBoardView from "./views/TaskBoardView";
import TaskListView from "./views/TaskListView";
import DistributionView from "./views/DistributionView";
import TaskCreationView from "./views/TaskCreationView";
import ProjectCreationView from "./views/ProjectCreationView";
import WelcomeView from "./views/WelcomeView"
import BoardView from "./views/BoardView";
import StoryPointVotingView from "./views/StoryPointVotingView";
import TeamView from "./views/TeamView";




// Routes within the Shrum app

const routes = [
    {
        path: "/",
        component: WelcomeView,
        exact: true,
    },

    {
        path: "/login",
        component: UserLoginView,
    },
    {
        path: "/register",
        component: SignUpView,
    },

    // Projects overview
    {
        path: "/projects",
        component: TaskCreationView // TODO: Adapt
    },

    /**
     * Project specific routes
     */

    {
        path: "/board",
        component: BoardView
    },

    // Global Tasklist (for current project)
    //
    // - backlog tasks (unvoted & voted)
    // - tasks in progress
    // - completed tasks
    {
        path: "/tasks",
        component: TaskListView,
    },


    // Salary Distribution View
    {
        path: "/overview",
        component: DistributionView,
    },

    // Project overview
    //
    // !! This one must apparently be placed down here to not match accidentally with the ones above
    {
        path: "/project/:projectSpecifier",
        component: TaskBoardView // TODO: Adapt
    },

    // Project Creation View
    {
        path: "/project-creation",
        component: ProjectCreationView
    },

    // Task Creation View
    {
        path: "/task-creation",
        component: TaskCreationView,
    },
    {
        path: "/story-points-voting",
        component: StoryPointVotingView,
    },
    {
        path: "/team",
        component: TeamView,
    }
    
];

export default routes;
