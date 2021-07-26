import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Paper,
    GridList,
    Button,
} from "@material-ui/core";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import PieChartIcon from "@material-ui/icons/PieChart";
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import GroupIcon from '@material-ui/icons/Group';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router';

import KebabMenu from "./KebabMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        height: 800,

        // background: '#f8f9d2',
        // backgroundImage: 'linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)'
       
        background: "#efeff5",
    },
    title: {
        fontWeight: 900,
        fontFamily: 'Trebuchet MS, sans-serif',
        fontSize: 'xxx-large',
        marginTop: '80px',

    },
    subtitle: {
        fontWeight: 900,
        fontFamily: 'Trebuchet MS, sans-serif',
        fontSize: 'x-large',
        marginTop: '-50px'
    },
    providedServices: {
        fontWeight: 700,
        fontSize: 'large',
        marginTop: '150px',
        marginBottom: '50px',
        fontFamily: 'Trebuchet MS, sans-serif',
    },
    voteIcon: {
        width: 50,
        height: 50,
        fill: '#730099'
    },
    serviceShortDescription: {
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 'medium',
        fontFamily: 'Optima, sans-serif',
    },
    serviceLongDescription: {
        textAlign: 'center',
        fontWeight: 400,
        fontSize: 'medium',
    },
    descriptionText: {
        marginTop: '-14px',
        fontFamily: 'Optima, sans-serif',
    },
    gridList: {
        alignItems: 'center',
    },
    par: {
        boxShadow: 'none',

        // background: '#d9d9d9',
        // backgroundImage: 'linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)',

        background: '#efeff5',
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    button: {
        marginLeft: "-100px"
    },
    signinButton: {
        margin: "20px",
        border: "2px",
        borderRadius: 5,
        cursor: "pointer",
        '&:hover': {
            color: "black",
            background: "primary",
            transition: "0.25s",
        },
    },
    signin: {
        margin: "10px",
        fontWeight: "normal",
    },
    signupButton: {
        background: "white",
        color: "black",
        cursor: "pointer",
        minWidth: 1,
        borderRadius: 5,
        '&:hover': {
            color: "black",
            background: "primary",
            transition: "0.25s",
        },
        marginRight: 0
    },
    signup: {
        margin: "10px",
        fontWeight: "normal",
    },
}));

/**
 * @param {props} props
 */
function WelcomeComponent(props) {
    const classes = useStyles();

    const user = useSelector((state) => state.user);
    const project = useSelector((state) => state.currentProject);

    const [menuAnchor, setMenuAnchor] = React.useState(null);

    const onClickSignIn = () => {
        props.history.push("/login");
    }

    const onClickSignUp = () => {
        props.history.push("/register");
    }

    return (
        <div className={classes.root} outline='none'>
            <KebabMenu
                open={Boolean(menuAnchor)}
                anchor={menuAnchor}
                onClose={() => setMenuAnchor(null)}
            />
            <Paper className={classes.paper}>
                <Typography >
                    <p className={classes.title}>SHRUM</p>
                    <p className={classes.subtitle}>THE PROJECT MANAGEMENT PLATFORM</p>

                </Typography>

                <div>
                    {typeof (user.user) === "undefined" ? (
                        <>
                            <Button variant="contained" 
                                className={classes.signinButton}
                                onClick={onClickSignIn}
                            >
                                Sign In
                            </Button>

                            <Button variant="contained"
                                className={classes.signupButton}
                                onClick={onClickSignUp}
                            >
                                Register
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography
                                className={classes.projectName}
                                variant="h5"
                                color="inherit"
                            >
                                {(typeof (project) === "undefined" || !project.project) ? "No project" : project.project.name}
                            </Typography>
                        </>
                    )}
                </div>

                <p className={classes.providedServices}> Provided Services</p>

                <GridList className={classes.gridList} cols={5}>
                    <Paper className={classes.par}>
                        <NoteAddIcon className={classes.voteIcon}></NoteAddIcon>
                        <p className={classes.serviceShortDescription}> Project and task creation</p>
                        <p className={classes.serviceShortDescription}> </p>
                        <p className={classes.descriptionText}> Project owners can</p>
                        <p className={classes.descriptionText}> set up projects, create </p>
                        <p className={classes.descriptionText}> tasks and assign them</p>
                        <p className={classes.descriptionText}> to developers.</p>
                    </Paper>
                    <Paper className={classes.par}>
                        <ViewWeekIcon className={classes.voteIcon}></ViewWeekIcon>
                        <p className={classes.serviceShortDescription}>Kanban board workflow</p>

                        <p className={classes.descriptionText}> Teams can use the</p>
                        <p className={classes.descriptionText}> Kanban board to keep </p>
                        <p className={classes.descriptionText}> track of the workflow</p>
                        <p className={classes.descriptionText}> in a project.</p>
                    </Paper>
                    <Paper className={classes.par}>
                        <HowToVoteIcon className={classes.voteIcon}></HowToVoteIcon>
                        <p className={classes.serviceShortDescription}> Story points voting</p>

                        <p className={classes.descriptionText}> Developers can</p>
                        <p className={classes.descriptionText}> vote on the number</p>
                        <p className={classes.descriptionText}> of story points for</p>
                        <p className={classes.descriptionText}> specific tasks.</p>
                    </Paper>
                    <Paper className={classes.par}>
                        <PieChartIcon className={classes.voteIcon}></PieChartIcon>
                        <p className={classes.serviceShortDescription}>Share distribution board</p>

                        <p className={classes.descriptionText}> Project members can</p>
                        <p className={classes.descriptionText}> view the percentage </p>
                        <p className={classes.descriptionText}> of the revenue distributed</p>
                        <p className={classes.descriptionText}> to each developer.</p>
                    </Paper>
                    <Paper className={classes.par}>
                        <GroupIcon className={classes.voteIcon}></GroupIcon>
                        <p className={classes.serviceShortDescription}>Project members board</p>

                        <p className={classes.descriptionText}> Developers can</p>
                        <p className={classes.descriptionText}> see the profiles of </p>
                        <p className={classes.descriptionText}> all the members </p>
                        <p className={classes.descriptionText}> of a project.</p>
                    </Paper>

                </GridList>

            </Paper>
        </div>
    );
}

export default withRouter(WelcomeComponent);


