import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import AboutComponent from "../components/AboutComponent";

/**
 * @param {props} props
 */
function AboutView(props) {
    //TODO implemenent about page with general information about SHRUM
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/about");
        }
    }, [user, props.history]);

    return (
        <AboutComponent
           
        />
    );
}

export default connect()(withRouter(AboutView));
