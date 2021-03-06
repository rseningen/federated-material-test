import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MainMenu from "./MainMenu/MainMenu";
import Paper from "@material-ui/core/Paper";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "@material-ui/icons";
import Box from "@material-ui/core/Box";

export const loadRemoteAppRoutes = async () => {
    const x = await import('app1/routes').then((r) => r);
    return x;
};

const HomeApp = () => (
    <Paper style={{width: 200, height: 100}}>
        <h3>Home App</h3>
    </Paper>
);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            remoteRoutes: [{
                path: "/",
                component: HomeApp,
                exact: true,
                title: "Home",
                icon: Home,
                showInMenu: true,
            }]
        };
    }

    componentDidMount() {
        loadRemoteAppRoutes().then(response => {
            this.setState({
                remoteRoutes: this.state.remoteRoutes.concat(response.remoteRoutes)
            });
        });
    }

    render() {
        console.log("Remote Routes: ", this.state.remoteRoutes);
        return (
            <Router>
                    <Box display="flex" flex={1}>
                        <MainMenu routes={this.state.remoteRoutes}/>
                        <div style={{marginTop: 50}}>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    {this.state.remoteRoutes.map((route) => (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    ))}
                                </Switch>
                            </React.Suspense>
                        </div>
                    </Box>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
