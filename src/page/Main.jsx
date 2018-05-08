'use strict'

import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home'
import asyncComponent from '../utils/asyncComponent'
import PrivateRoute from './PrivateRoute'
const Classify = asyncComponent(() => import('./Classify'));
const Discover = asyncComponent(() => import('./Discover'));
const Shopcar = asyncComponent(() => import('./Shopcar'));
const User = asyncComponent(() => import('./User'));
const Login = asyncComponent(() => import('./Login'));
import Footers from './Footers'
import '../assets/style/main.css'

class Main extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const { location } = this.props;
        const unShowFooterList = ['/login'];
        const unShowFooterListStatus = !unShowFooterList.includes(location['pathname']);
        return (
            <main>
                <div className="page-container">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/classify' component={Classify} />
                        <Route path='/discover' component={Discover} />
                        <Route path='/shopcar' component={Shopcar} />
                        <PrivateRoute path='/user' component={User} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
                {
                    unShowFooterListStatus ? <Footers /> : ''
                }
            </main>
        )
    }
}

export default withRouter(Main)