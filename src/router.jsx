import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routers from './pages/pages.module';

const getChildRoutes = item => {
    let list = [];
    item.children.forEach(e => {
        if (e.hasOwnProperty('children')) {
            list = [...list, ...getChildRoutes(e)];
        } else {
            list.push(getRoute(e));
        }
    });
    return list;
}

const getRoute = item => <Route key={item.path} path={item.path} component={item.component} />

export default class CustomRouter extends Component {
    render() {
        let routeItems = [<Redirect key="/" from="/" to="/dashboard" exact />];
        routers.forEach(item => {
            if (item.hasOwnProperty('children')) {
                routeItems = [...routeItems, ...getChildRoutes(item)];
            } else {
                routeItems.push(getRoute(item));
            }
        });
        return <Switch>{routeItems}</Switch>
    }
}