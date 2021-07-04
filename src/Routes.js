import React from 'react';
import {  Route, Switch, Redirect } from "react-router-dom";
import Login from './views/pages/auth/Login';
import Register from './views/pages/auth/Register';
import Home from './views/Index';
import Admin from "./layouts/Admin";
import Landing from "./views/Landing.js";
import Profile from "./views/Profile";

import  AuthenticatedRoute from './AuthenticatedRoute';


class Routes extends React.Component
{ 
    render()
    {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/login' component={Login} />
                <Route  path='/register' component={Register} />
                <AuthenticatedRoute path="/admin" component={Admin}/>
                <Route path="/landing" exact component={Landing} />
                <Route path="/profile" exact component={Profile} />
                <Redirect from="*" to="/" /> 
            </Switch>
        )
    }
}

export default Routes;