import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import ProjectCreationComponent from "../components/ProjectCreationComponent";

import { createProject } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
 function ProjectCreationView(props) {
    const user = useSelector((state) => state.user);
    const project = useSelector((state) => state.currentProject);

    useEffect(() => {
        if (!user.user) {
            props.history.push("/");
        }
    }, [user, props.history]);

    useEffect(() => {
        // Navigate to the ticket board after successful project creation
        if (project.project){
            props.history.push("/board");
        }
    }, [project]);

    const onCreate = (project) => {
        console.log("Creating new project: ", project);

        // Trigger redux action create project
        props.dispatch(createProject(project));

    };

    const onCancel = () => {
        props.history.push("/");
    };

    return (
        <ProjectCreationComponent
            user={user}
            onCreate={onCreate}
            onCancel={onCancel}
        />
    );
}

export default connect()(withRouter(ProjectCreationView));
