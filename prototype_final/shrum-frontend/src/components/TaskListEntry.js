import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, TableCell, TableRow, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        maxWidth: 54,
    },
}));


function TaskListEntry(props) {
    // with this you can access the above defiend style classes
    const classes = useStyles();

    return (
        <TableRow
            key={props.task._id}
            onClick={() => props.onClickDisplayTask(props.task._id)}
            height="118px"
        >
            <TableCell>
                <Typography variant="h6">{props.task.title}</Typography>
            </TableCell>
            <TableCell>
                <Typography variant="h7">{props.task.description}</Typography>
            </TableCell>
        </TableRow>

    );
}
export default TaskListEntry;