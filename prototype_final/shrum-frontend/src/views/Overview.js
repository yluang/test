import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import OverviewComponent from "../components/OverviewComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function Overview(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/");
        }
    }, [user, props.history]);

    return (
        <ProjectCreationComponent
         
        />
    );
}

export default connect()(withRouter(Overview));
