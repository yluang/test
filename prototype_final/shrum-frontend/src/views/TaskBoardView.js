import React, { useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { getProject, getTasks } from "../redux/actions";

import Loading from "../components/Loading";

import KanbanBoard from "../components/KanbanBoard";

function TaskBoardView(props) {

    // Project name from URI
    const { projectSpecifier } = useParams();

    // Redux state
    const user = useSelector((state) => state.user);      
    const project = useSelector((state) => state.currentProject);
    const tasks = useSelector((state) => state.tasks);
    
    useEffect(() => {
        // Force login page if current user is not logged in
        if(!user.user){
            props.history.push("/login");
        }

        // load project when the page is loaded
        if (!project.project) {
            // Redux get project action
            props.dispatch(getProject(projectSpecifier));
        }
    });

    useEffect(() => {
        if (project.error) {
            // TODO: Display error to user
        }

        if (project.project) {
            props.dispatch(getTasks(projectSpecifier));
        }

    }, [project]);

    return !tasks ? (
        // Display loading component during task loading
        <Loading />
    ) : !Array.isArray(tasks) ? (
        // If something loaded, but it is not an array, an error must have occured
        <div>Task Loading Error!</div>
    ) : (
        // Display Kanban Board if everything worked fine
        <KanbanBoard
            tasks={tasks}
            user={user}
            />
    );
}

/*
Alternative mapping (instead of useSelector)

const mapStateToProps = (state) => ({
    user: state.user,
    project: state.currentProject
})
*/

export default connect()(withRouter(TaskBoardView));
//export default connect(mapStateToProps)(withRouter(TaskBoardView));