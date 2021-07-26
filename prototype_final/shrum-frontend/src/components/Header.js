import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, AppBar, Button, IconButton, TextField, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { connect, useSelector } from "react-redux";

import KebabMenu from "./KebabMenu";

import logo from './logo.png';
import { FormatAlignCenter } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        paddingLeft: theme.spacing(1),
    },
    logo: {
        maxHeight: "3rem",
    },
    searchBar: {
        flexGrow: 1,
        background: "#FFFFFF",
        margin: "0 20px 0 20px",
        borderRadius: 5,
        borderColor: "none"
    },
    projectName: {

    },
    avatar: {
        margin: "0 0 0 20px"
    },
}));

/**
 * Navigation bar of the app
 * @param {props} props
 */
function Header(props) {
    const classes = useStyles();

    const user = useSelector((state) => state.user);
    const project = useSelector((state) => state.currentProject);

    const [menuAnchor, setMenuAnchor] = React.useState(null);

    const searchbarDefaultText = "Search tasks, comments, people, ...";

    return (
        <AppBar position="sticky" >
            <KebabMenu
                open={Boolean(menuAnchor)}
                anchor={menuAnchor}
                onClose={() => setMenuAnchor(null)}
            />
            <Toolbar className={classes.toolbar}>

                <img
                    src={logo}
                    className={classes.logo}
                    onClick={() => props.history.push("/")}
                />

                { /*
                Title will probably not be shown, since we have a logo already that includes the project name
                or show the logo without title and uncomment this
                
                <Typography
                    className={classes.title}
                    variant="h5"
                    color="inherit"
                >
                    Shrum
                </Typography>
                */ }




                {/* TODO implement proper search bar -> low priority */}

                {/* <TextField 
                    className={classes.searchBar}
                    variant={"outlined"}
                    placeholder={searchbarDefaultText}
                />   */}




                { /* Legacy Movie App Code

                <IconButton onClick={onClickGithub} color="inherit">
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={props.toggletheme} color="inherit">
                    {props.darkmode ? <WbSunnyIcon /> : <Brightness3Icon />}
                </IconButton>
                <IconButton
                    
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                
                // Pls dont delete: Alternative Login/Signup buttons
                        <div className={classes.signinButton}
                            onClick={onClickSignIn}>
                            <Typography
                                className={classes.signin}
                                variant="h5"
                                color="inherit"
                            >
                                Sign In
                            </Typography>
                        </div>

                        <div className={classes.signupButton}
                            onClick={onClickSignUp}>
                            <Typography
                                className={classes.signup}
                                variant="h5"
                                color="inherit"
                            >
                                Sign Up
                            </Typography>
                        </div>
                */
                }
                
                <div>
                    {typeof (user.user) === "undefined" ? (
                        <>

                      
                        </>
                    ) :
                     (
                        <>
                            <Typography
                                className={classes.projectName}
                                variant="h5"
                                color="inherit"
                            >
                                {(typeof (project) === "undefined" || !project.project) ? "No project" : project.project.name}
                            </Typography>
                            <Avatar className={classes.avatar}
                                onClick={(event) => setMenuAnchor(event.currentTarget)}>
                                {user.user.username ? user.user.username[0] : ""}
                            </Avatar>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default connect()(withRouter(Header));
