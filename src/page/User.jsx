'use strict'
import React from 'react'
import '../assets/style/user.scss'

export default class User extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    // componentWillMount() {
    //     const userName = localStorage.getItem('user');
    //     if (!userName) {
    //         this.props.history.push('/login');
    //     }
    // }

    loginOut() {
        localStorage.removeItem('username');
        this.props.history.push('/login');
    }

    render() {  
        const username = localStorage.getItem('username') || '游客'
        return (
            <div className="user">
                <span className="login-out" onClick={this.loginOut.bind(this)}>退出</span>
                <div className="user-top">
                    <img src={require('../assets/images/per22.png')} alt="" />
                    <p>{username}</p>
                </div>
                <ul className="user-box">
                    <li>
                        <i className="user-add"></i>
                        <span>我的收藏</span>
                    </li>
                    <li>
                        <i className="user-address"></i>
                        <span>我的地址</span>
                    </li>
                    <li>
                        <i className="user-order"></i>
                        <span>我的订单</span>
                    </li>
                </ul>
            </div>
        )
    }
}