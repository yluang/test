import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Link, Toolbar, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import KebabMenu from "./KebabMenu";
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        background: "#730099",
        minHeight: '30px',
        // display: "flex",
        justifyContent: "center",
        display: 'inline-block',
        width: '100%'
    },
    gitlabButton: {
        color: "#ffffff",
        textAlign: 'center',
        fontSize: '14px',
    },
    button: {
        color: "#ffffff",
        fontSize: '14px',
        marginRight: '30px'
    }
}));

/**
 * Footer of the app
 * @param {props} props
 */
function Footer(props) {
    const classes = useStyles();

    const onClickAbout = (event) => {
        props.history.push("/about");
    }

    const onClickHelp = (event) => {
        props.history.push("/about");
    }

    return (
        <div>
            <Toolbar className={classes.toolbar}>
                <Typography >
                    <Link className={classes.button}
                        onClick={onClickAbout}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About 
                </Link>
                    <Link className={classes.button}
                        onClick={onClickHelp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Help
                </Link>
                    <Link className={classes.gitlabButton}
                        href="https://gitlab.lrz.de/seba-master-2021/team-09"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gitlab
                </Link>

                </Typography>
            </Toolbar>
        </div>
    );
}

export default withRouter(Footer);
