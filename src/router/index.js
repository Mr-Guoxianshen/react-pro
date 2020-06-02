import React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import Test from '../pages/test';

export default class RouterContainer extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/test" component={Test} />
                <Route path="/home-page" component={HomePage} />
            </Switch>
        )
    }
}