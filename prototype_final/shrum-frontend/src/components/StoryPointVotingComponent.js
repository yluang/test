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
    titleRow: {
        width: "500px",
    },
}));

function StoryPointVotingComponent(props) {
    const classes = useStyles();

    const [project, setProject] = React.useState('');

    const [assignee, setAssignee] = React.useState('');

    const [option, setSPOption] = React.useState('');

    const [priority, setPriority] = React.useState({
        low: false,
        medium: false,
        high: false,
    });

    const [title, setTitle] = React.useState('');

    const [description, setDescription] = React.useState('');

    const { low, medium, high } = priority;

    const { manualAssignment, timeConstraint, liveVoting } = option;

    const errorPriority = [low, medium, high].filter((v) => v).length !== 1;
    const errorEmptyTitle = title === "";
    const errorEmptyDescription = description === "";

    //TODO add errorProject 

    const handleProject = (event) => {
        setProject(event.target.value);
        console.log(project);

    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
        console.log(title);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
        console.log(description);
    };

    const handleAssignee = (event) => {
        setAssignee(event.target.value);
        console.log(assignee);
    };

    const handlePriority = (event) => {
        setPriority({ ...priority, [event.target.name]: event.target.checked });
        console.log(priority)
    };

    const handleSPOption = (event) => {
        setSPOption(event.target.value);
        console.log(option);

        if(option === "Manual assignment") {
            alert("MANUAL ASSIGNMENT")
        }
    };

    // creating a object with all relevant data to update or create a changed movie
    const packTask = () => {
        let task = {
            ...props.task,
        };
    
        task.title = title;
        task.description = description;
        task.priority = priority;
        task.voting = option;

        task.assignee = assignee;

        // The project is handled on its own (as a different parameter)
    
        return task;
    };

    // save is called, functionality differs whether it is a new task or not
    const onSave = () => {
        if (props.new) {
            props.onCreate(project, packTask());
        } else {
            props.onSave(project, packTask());
        }
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.header}>
                <Typography variant="h4" align="left">
                    Story Points Voting
                </Typography>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={3}>


                            <FormControl required error={errorEmptyDescription} className={classes.formControl}>
                                <FormLabel style={{ marginBottom: "2px" }}>Description:</FormLabel>
                                <TextField  component="form" size="medium" 
                                    required
                                    multiline
                                    rows={15}
                                    rowsMax={20}
                                    id="outlined-required"
                                    label="Brief Description about the task..."
                                    defaultValue=""
                                    value={description}
                                    variant="outlined"
                                    style={{ width: 800, height: 400, marginLeft: 0 }}
                                    onChange={handleDescription}
                                />
                            </FormControl>

                            <FormControl required error={errorEmptyDescription} variant="outlined" className={classes.formControl}>
                                <FormLabel style={{ marginBottom: "10px" }}>Your estimation:</FormLabel>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={option}
                                    onChange={handleSPOption}
                                    style={{ width: 300 }}
                                >
                                    <MenuItem value={"1"}>1</MenuItem>
                                    <MenuItem value={"2"}>2</MenuItem>
                                    <MenuItem value={"3"}>3</MenuItem>
                                    <MenuItem value={"4"}>4</MenuItem>
                                    <MenuItem value={"5"}>5</MenuItem>
                                    <MenuItem value={"6"}>6</MenuItem>
                                    <MenuItem value={"7"}>7</MenuItem>
                                    <MenuItem value={"8"}>8</MenuItem>
                                    <MenuItem value={"9"}>9</MenuItem>
                                    <MenuItem value={"10"}>10</MenuItem>
                                </Select>
                            </FormControl>

                           
                        </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" color="secondary" style={{float: 'right'}}>
                    Save
                </Button>
            </Paper>
        </div>

    );
}

export default StoryPointVotingComponent;

