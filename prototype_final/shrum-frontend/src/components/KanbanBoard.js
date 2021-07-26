import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    boardBackground: {
        background: "white"
    },
    title: {
        color: "black",
        fontSize: "2em",
        margin: "auto",
        textAlign: "center"
    },
    link: {
        background: "black",
        textAlign: "center"
    }
}));

function KanbanBoard(props) {
    // Get style classes
    const classes = useStyles();

    // Return KanbanBoard component
    return (
        <div className={classes.boardBackground}>
            <p className={classes.title}>Shrum Task Board</p>
        </div>
    );
}

export default KanbanBoard;