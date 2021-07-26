import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import TaskCreationComponent from "../components/TaskCreationComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function TaskCreationView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/task-creation");
        }
    }, [user, props.history]);

    const onRegister = (username, password, isAdmin) => {
        // props.dispatch(register(username, password, isAdmin));
    };

    const onCancel = () => {
        props.history.push("/");
    };

    return (
        <TaskCreationComponent
        
        />
    );
}

export default connect()(withRouter(TaskCreationView));
