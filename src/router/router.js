import React, { Component } from 'react';
import { withRouter, Route, Switch  } from 'react-router-dom'
import Layout from '../pages/layouts/layout'
import Login from '../pages/login/login'

class router extends Component{

    render(){
        return(
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path="/" component={Layout}/>
            </Switch>
        )
    }
}

export default withRouter(router);