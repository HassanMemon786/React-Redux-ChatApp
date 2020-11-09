import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";
import Chat from "../containers/Chat";

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/chat" component={Chat} />
                </Router>
            </div>
        )
    }
}

export default  AppRouter;

