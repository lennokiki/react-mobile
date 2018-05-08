'use strict'
import React from 'react'
import Headers from './Headers'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import '../assets/style/discover.scss'

const navData = [
    { path: 'chose', title: '精选'},
    { path: 'order', title: '订阅'},
    { path: 'commity', title: '社区'}
]
//导航
const Nav = () => (
    <ul className="nav-container">
        {
            navData.map(item => {
                return (
                    <li key={item.path}>
                        <NavLink to={`/discover/${item.path}`}  activeClassName="discover-active">{item.title}</NavLink>
                    </li>
                )
            })
        }
    </ul>
)
//内容区
const SubContent = (props) => {
    const params = props.match.path;
    return (
        <div className="sub-content">
            <div className="sub-content-top">
                <img src={require('../assets/images/dis1.png')} alt=""/>
                <img src={require('../assets/images/dis2.png')} alt=""/>
                <img src={require('../assets/images/dis3.png')} alt=""/>
            </div>
            <img className="sub-content-img1" src={require('../assets/images/dis4.png')} alt=""/>
            <ul className="sub-content-item">
                <li>
                    <img src={require('../assets/images/dis6.png')} alt=""/>
                    <p>鱼香肉丝盖饭</p>
                    <span>￥79.90</span>
                </li>
                <li>
                    <img src={require('../assets/images/dis6.png')} alt=""/>
                    <p>鱼香肉丝盖饭</p>
                    <span>￥79.90</span>
                </li>
                <li>
                    <img src={require('../assets/images/dis6.png')} alt=""/>
                    <p>鱼香肉丝盖饭</p>
                    <span>￥79.90</span>
                </li>
            </ul>
            <img className="sub-content-img2" src={require('../assets/images/dis5.png')} alt=""/>
        </div>
    )
}

const Content = () => (
    <div className="content">
        <Nav />
        <Switch>
            <Route exact path='/discover/chose' component={SubContent} />
            <Route exact path='/discover/order' component={SubContent} />
            <Route exact path='/discover/commity' component={SubContent} />
            <Redirect from="/discover" to="/discover/chose"></Redirect> 
        </Switch>        
    </div>
)

export default () => (
    <div className="discover">
        <Headers />
        <Content />
    </div>
)