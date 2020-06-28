import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from "react-router";
import  Welcome from './Components/Welcome';
import  Todo from './Components/Todo';
import  NotFound from './Components/NotFound';

class App extends Component {
    constructor(props) {
        super(props);

        this.history = createBrowserHistory();
    }

    render() {
        return (
            <Router history={this.history}>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/todo" component={Todo} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
