import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import VoteComponent from "../components/VoteComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function VoteView(props) {
  

    return (
        <InformationComponent
           
        />
    );
}

export default connect()(withRouter(VoteView));