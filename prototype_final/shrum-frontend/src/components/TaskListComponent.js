// import React, { useEffect } from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import {
//     Button,
//     Divider,
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Typography,
//     TableSortLabel,
//     TablePagination,
// } from "@material-ui/core";

// import TaskListEntry from "./TaskListEntry";


// const useStyles = makeStyles((theme) => ({
//     movieListRoot: {
//         padding: theme.spacing(2),
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//     },
//     movieListHeader: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         paddingTop: theme.spacing(2),
//         paddingBottom: theme.spacing(2),
//         maxWidth: "1000px",
//     },
//     headerDivider: {
//         margin: theme.spacing(2),
//     },
//     addMovieButton: {
//         margin: theme.spacing(2),
//     },
//     taskListPaper: {
//         width: "1000px",
//     },
//     image: {
//         borderRadius: theme.shape.borderRadius,
//         boxShadow: theme.shadows[2],
//     },
// }));


// /**
//  * Comparator for two objects on a generic property
//  * @param {compare object a} a
//  * @param {compare object b} b
//  * @param {order by property name} orderBy
//  * @returns 1 when b > a, -1 when a < b
//  */
//  function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }

// /**
//  * Get comparator for sorting table
//  * @param {asc or desc} order
//  * @param {order by propoerty name} orderBy
//  * @returns function that compares two objects
//  */
// function getComparator(order, orderBy) {
//     return order === "desc"
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

// /**
//  * Sort array with respect to the initial order of the objects
//  * @param {to sort array} array
//  * @param {comparator for sorting} comparator
//  * @returns sorted array
//  */
// function stableSort(array, comparator) {
//     // include index into the to sortable array objects
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     // sort the array
//     stabilizedThis.sort((a, b) => {
//         // compare two array objects a[0] or b[0] refer to the original element of the list a[1] or b[1] would be the initial index
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         // if both objects have the same property value in the order by property, their initial order in the array is maintained
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// }



// function TaskListComponent(props) {
//     const classes = useStyles();

//     const [orderBy, setOrderBy] = React.useState();
//     const [order, setOrder] = React.useState();

//     const onRequestSort = (cellId, event) => {
//         // if the current orderBy is also the clicked property then the direction of the sorting should be changed
//         // otherwise the fist order direction is always ascending
//         const isAsc = orderBy === cellId && order === "asc";
//         setOrder(isAsc ? "desc" : "asc");

//         // setting the called cell id as order by
//         setOrderBy(cellId);
//     };

//     return (
//         <div>
//             <h2>Shrum Task List</h2>
//             <Paper className={classes.taskListPaper}>
//                 <TableContainer>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell width="20%">Title</TableCell>
//                                 <TableCell align="left">Description</TableCell>
//                                 { /*sortableHeadCells.map((headCell, index) => (
//                                     <SortableTableHeadCell
//                                         key={index}
//                                         order={order}
//                                         orderBy={orderBy}
//                                         headCell={headCell}
//                                         onRequestSort={() =>
//                                             onRequestSort(headCell.id)
//                                         }
//                                         width={headCell.width}
//                                     />
//                                 ))}
//                                 {/*
//                                 props.isAdmin ? (
//                                     <TableCell align="center">Delete</TableCell>
//                                 ) : null
//                                 */}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {props.tasks
//                                 .map((task, index) => {
//                                     return (
//                                         <TaskListEntry
//                                             key={index}
//                                             task={task}
//                                             onClickDisplayTask={
//                                                 props.onClickDisplayTask
//                                             }
                                            
//                                         />
//                                     );
//                                 })}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Paper>
//         </div> 
//     ); 
// }

// export default TaskListComponent;
import React from 'react'

function TaskListComponent() {
    return (
        <div>
            
        </div>
    )
}

export default TaskListComponent
