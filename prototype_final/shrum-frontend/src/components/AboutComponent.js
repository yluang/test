import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Paper,
    GridList,
    Button,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        width: '100px',
        height: '100px',
        fontSize: "xx-large"
    }
}));

/**
 * @param {props} props
 */
function AboutComponent(props) {

    const classes = useStyles();
    return (
        <div > 
        
        </div>
    );
}

export default AboutComponent;
