import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import TeamViewComponent from "../components/TeamViewComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function TeamView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/team");
        }
    }, [user, props.history]);

    const onRegister = (username, password, isAdmin) => {
        // props.dispatch(register(username, password, isAdmin));
    };

    const onCancel = () => {
        props.history.push("/");
    };

    return (
        <h1>team view coming...</h1>
        //<TeamViewomponent
        ///>
    );
}

export default connect()(withRouter(TeamView));
