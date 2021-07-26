import React, { useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import SalaryDistributionComponent from "../components/SalaryDistributionComponent";

function DistributionView(props) {

    // Project name from URI
    const { projectName } = useParams();

    // Redux
    const tasks = useSelector((state) => state.tasks)
    const user = useSelector((state) => state.user);
    
    // TODO: filter out the tasks that are accomplished already and pass them to the 
    // overview component

    return (
        <h1>Salary dirtribution</h1>

        // <SalaryDistributionComponent
        //     tasks={tasks}
        //     user={user}
        // />
    )
}

export default connect()(withRouter(DistributionView));