import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    TextField,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Grid,
    Paper,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    header: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 1000,
        height: 80,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 1000,
        height: 800,
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 100,
    },
    nameRow: {
        width: "500px",
    },
}));

function ProjectCreationComponent(props) {

    const classes = useStyles();

    const [projectName, setProjectName] = React.useState('');
    const [projectMembers, setProjectMembers] = React.useState('');

    const errorEmptyName = projectName === "";

    const handleProjectName = (event) => {
        console.log("Handling project name");
        setProjectName(event.target.value);
    };

    const onProjectMembersUpdate = (members) => {
        setProjectMembers({ ...projectMembers, members});
    }

    const onCreate = () => {
        props.onCreate({
            name: projectName,
            members: []
        });
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.header}>
                <Typography variant="h4" align="left">
                    Create Project
                </Typography></Paper>

                <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={3}>

                        <FormControl required error={errorEmptyName} className={classes.formControl}>
                                <FormLabel style={{ marginBottom: "2px" }}>Name</FormLabel>
                                <TextField className={classes.nameRow} component="form"
                                    required
                                    id="outlined-required"
                                    label="Add project name"
                                    defaultValue=""
                                    variant="outlined"
                                    style={{ width: 500, marginLeft: 0 }}
                                    onChange={handleProjectName}
                                />
                            </FormControl>

                        </Grid>
                    </Grid>
                </Grid>

                <Button variant="contained" 
                        color="secondary"
                        style={{float: 'right'}}
                        onClick={onCreate}>
                    Create
                </Button>

                </Paper>
        </div>
    )
}


export default ProjectCreationComponent;
