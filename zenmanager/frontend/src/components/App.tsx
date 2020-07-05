import * as React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import store from "../store";
import { Header } from "./layout/header/Header";
import { Dashboard } from "./leads/Dashboard";
import { Register } from "./accounts/Register";
import { Login } from "./accounts/Login";
import { PrivateRoute } from "./common/PrivateRoute";

const App = () => (
    <Provider store={store}>
        <Router>
            <>
                <Header />
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </>
        </Router>
    </Provider>
);

export default App;
