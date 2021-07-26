import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
//import { createStore, applyMiddleware } from "redux";
//import thunkMiddleware from "redux-thunk";
import {
    MuiThemeProvider,
    createMuiTheme,
    makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollContainer from "./components/ScrollContainer";
//import reducers from "./redux/reducers";
import configureStore, { history } from "./configureStore";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AppTheme from "./theming/themetypes";
import AppThemeOptions from "./theming/themes";
import { DndProvider } from "react-dnd";
import BoardComponent from "./components/BoardComponent";

const useStyles = makeStyles((theme) => ({
    appRoot: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
    },

    tableContainer: {
        display: "flex",
        width: "100%",
        height: "100%"
    },

    tableRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },

    tableColumn: {
        display: "flex",
        flexDirection: "column",
        flexBasis: 0,
        flexGrow: 1,

        textAlign: "center",
    }

}));

function App() {
    const classes = useStyles();

    // set document title
    useEffect(() => {
        document.title = "Shrum Task Tracking Platform";
    }, []);

    // create store for redux
    const store = configureStore(); //createStore(reducers, applyMiddleware(thunkMiddleware));

    // theme for app
    const [theme, setTheme] = React.useState(AppTheme.LIGHT);

    // toggle theme
    const toggleTheme = () => {
        setTheme(theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT);
    };

    //show the sidebar only in these paths
    const paths = ['/projects', '/project/:projectSpecifier/board', '/project/:projectSpecifier/tasks',
    '/project/:projectSpecifier/overview', '/project/:projectSpecifier', '/project-creation', '/task-creation'];

    return (

        <div className={classes.appRoot}>
            <BoardComponent />
                
            <MuiThemeProvider theme={createMuiTheme(AppThemeOptions[theme])}>
            
                <Provider store={store}>
                    <ConnectedRouter history={history} >
                        <React.Fragment>
                            <CssBaseline />

                            <Header
                                darkmode={theme === AppTheme.DARK}
                                toggletheme={toggleTheme}
                            />
                            
                            <div className={classes.tableContainer}>
                                <div className={classes.tableRow}>
                                <div className={classes.tableColumn} style={{ "max-width": "200px" }}> 
                                            <Sidebar />
                                        </div>

                                    <div className={classes.tableColumn}>
                                        <ScrollContainer>
                                            <Switch>
                                                {routes.map((route, i) => (
                                                    <Route key={i} {...route} history={history} />
                                                ))}
                                            </Switch>
                                        </ScrollContainer>
                                        <Footer />
                                    </div>
                                </div>
                            </div>

                            { /*
                            // <table tableLayout="auto">
                            //     <tbody>
                            //         <tr>
                            //             <td>
                            //                 <Sidebar />
                            //             </td>
                            //             <td width="100%">
                            //                 <ScrollContainer>
                            //                     <h1>Container</h1>
                            //                 </ScrollContainer>
                            //             </td>
                            //         </tr>
                            //     </tbody>
                            // </table>
                            */}


                        </React.Fragment>
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        
        </div>

        
    );
}

export default App;
