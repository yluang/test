import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import InformationComponent from "../components/InformationComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function InformationView(props) {
  

    return (
        <InformationComponent
           
        />
    );
}

export default connect()(withRouter(InformationView));