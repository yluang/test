import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import StoryPointVotingComponent from "../components/StoryPointVotingComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function StoryPointVotingView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/story-points-voting");
        }
    }, [user, props.history]);

    const onRegister = (username, password, isAdmin) => {
        // props.dispatch(register(username, password, isAdmin));
    };

    const onCancel = () => {
        props.history.push("/");
    };

    return (
        //<h1>voting coming...</h1>
       
       <StoryPointVotingComponent
        />
    );
}

export default connect()(withRouter(StoryPointVotingView));
