'use strict'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '@/assets/style/footer.scss'

const navRoute = [
    {path: '/', class: 'home', title: '首页', exact: true },
    {path: '/classify', class: 'classify', title: '分类', exact: false },
    {path: '/discover', class: 'discover', title: '发现', exact: false },
    {path: '/shopcar', class: 'shopcar', title: '购物车', exact: false },
    {path: '/user', class: 'user', title: '我的', exact: false },
];


export default () => (
    <div className="footer">
        <ul>
            {
                navRoute.map( item => 
                    (
                        <li key={item.class}>
                            <NavLink exact={item.exact} to={item.path} activeClassName="active">
                                <i className={`footer-icon footer-${item.class}`}></i>
                                <span className="icon-name">{item.title}</span>
                            </NavLink>
                        </li>
                    )
                ) 
            }
        </ul>
    </div>
)