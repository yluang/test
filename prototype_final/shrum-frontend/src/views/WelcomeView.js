import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import WelcomeComponent from "../components/WelcomeComponent";

/**
 * @param {props} props
 */
function WelcomeView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/");
        }
    }, [user, props.history]);

    return (
        <WelcomeComponent
           
        />
    );
}

export default connect()(withRouter(WelcomeView));
