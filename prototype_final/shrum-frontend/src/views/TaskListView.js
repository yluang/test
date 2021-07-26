// import React, { useEffect } from "react";
// import { withRouter, useParams } from "react-router-dom";
// import { connect, useSelector } from "react-redux";

// import { getTasks, getProject } from "../redux/actions";

// import TaskListComponent from "../components/TaskListComponent";
// import Loading from "../components/Loading";

// function TaskListView(props) {

//     // Project name from URI
//     const { projectSpecifier } = useParams();

//     // Redux
//     const user = useSelector((state) => state.user); 
//     const tasks = useSelector((state) => state.tasks);
//     const project = useSelector((state) => state.currentProject);

//     useEffect(() => {
//         // Load project when the page is loaded
//         if (!project.project) {
//             // Redux get project action
//             props.dispatch(getProject(projectSpecifier));
//         }
//     });

//     // Load tasks if a project is loaded
//     useEffect(() => {
//         if (project.project) {
//             props.dispatch(getTasks(projectSpecifier));
//         }
//     }, [project]);

//     /**
//      * TODO:
//      * - implement "Add Task" button somewhere
//      * 
//      */
//     const onAddTask = () => {
//         props.history.push("/tasks/new");
//     }
    

//     return !tasks.tasks ? (
//         <Loading />
//     ) : !Array.isArray(tasks.tasks) ? (
//         <div>Error while loading tasks</div>
//     ) : (
//         <>
//             <TaskListComponent
//                 tasks={tasks.tasks}
//                 user={user}
//             />
//         </>
//     );
// }

// export default connect()(withRouter(TaskListView))


import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import TaskListComponent from "../components/TaskListComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function TaskListView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/tasks");
        }
    }, [user, props.history]);

    const onRegister = (username, password, isAdmin) => {
        // props.dispatch(register(username, password, isAdmin));
    };

    const onCancel = () => {
        props.history.push("/");
    };

    return (
        <h1>tasks coming...</h1>
       // <TaskListComponent
        ///>
    );
}

export default connect()(withRouter(TaskListView));
