import React , { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router';

import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import ReorderIcon from "@material-ui/icons/Reorder";
import PieChartIcon from "@material-ui/icons/PieChart";
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import GroupIcon from '@material-ui/icons/Group';


const useStyles = makeStyles((theme) => ({
    navbar: {
        //flexGrow: 1,
        height: "100%",
        background: "#E0E0E0",
        width: "10%",
        position: "fixed",
        paddingTop: "2%"
    },
    button: {
        marginBottom: "20px",
        background: "white",
        width: "100px",
        height: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        borderRadius: 15,
        verticalAlign: "center",
        padding: "10px",
        
    },
    icon: {
        margin: "auto",
        fontSize: "5em",
        marginBottom: "0px",
        verticalAlign: "middle",
        fill: '#730099',
        //fontFamily: "sans-serif",
        //marginTop: "20px"
    },
    buttonLabel: {
        fontSize: "1.5em",
        margin: "0",
        
    }
   
}));


function Sidebar(props) {
    const classes = useStyles();

    const onClickBoard = (event) => {
        props.history.push("/board");
    };

    const onClickList = (event) => {
        props.history.push("/tasks");
    }

    const onClickOverview = (event) => {
        props.history.push("/overview");
    }
    
    const onClickCreateTask = (event) => {
        props.history.push("/task-creation");
    }

    const onClickVote = (event) => {
        props.history.push("/story-points-voting");
    }

    const onClickTeam = (event) => {
        props.history.push("/team");
    }

    return (
        <div className={classes.navbar} >
            {/* <Paper>  */}
            <div className={classes.button} 
                onClick={ onClickBoard }>
                <ViewWeekIcon className={classes.icon} />
                <p className={classes.buttonLabel}>
                    {/* Board */}
                </p>
            </div>

            <div className={classes.button} 
                onClick={onClickList}>
                <ReorderIcon className={classes.icon} />
                <p className={classes.buttonLabel}>
                    {/* Backlog */}
                </p>
            </div>

            <div className={classes.button} 
                onClick={onClickOverview}>
                <PieChartIcon className={classes.icon} />
                <p className={classes.buttonLabel}>
                    {/* Distribution */}
                </p>
            </div>

            <div className={classes.button} 
                onClick={onClickCreateTask}>
                <AddCircleSharpIcon className={classes.icon} />
                <p className={classes.buttonLabel}>
                    {/* Create ticket */}
                </p>
            </div>

            <div className={classes.button} 
                onClick={onClickVote}>
                <HowToVoteIcon className={classes.icon} />
                <p className={classes.buttonLabel}>
                    {/* Vote */}
                </p>
            </div>

            <div className={classes.button} 
                onClick={onClickTeam}>
                <GroupIcon className={classes.icon} />
                <p className={classes.buttonLabel}>
                    {/* Team */}
                </p>
            </div>
        </div>
    );
}

export default withRouter(Sidebar);