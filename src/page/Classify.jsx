'use strict'
import React from 'react'

import Headers from './Headers'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import '../assets/style/classify.scss'

const linkList = [
    { number: 1, name: "推荐" },
    { number: 2, name: "试吃" },
    { number: 3, name: "海鲜水产" },
    { number: 4, name: "新鲜果蔬" },
    { number: 5, name: "猪肉牛肉" },
    { number: 6, name: "禽类蛋类" },
    { number: 7, name: "饮品甜品" },
    { number: 8, name: "田老师" },
    { number: 9, name: "呷哺" },
    { number: 10, name: "麦当劳" },
    { number: 11, name: "肯德基" },
    { number: 12, name: "海底捞" },
    { number: 13, name: "金鼎轩" },
    { number: 14, name: "永旺" }
]

const itemData = [
    {number: 1, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 2, data: [{img:2, title: '虾类'}, {img: 4, title: '蟹类'}, {img: 3, title:'鱼类'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'},{img: 3, title: '鸡肉'},{img:2, title: '虾类'}, {img: 4, title: '蟹类'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'},{img:2, title: '虾类'}, {img: 4, title: '蟹类'}]},
    {number: 3, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 4, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}]},
    {number: 5, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 6, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}]},
    {number: 7, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 8, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}]},
    {number: 9, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 10, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}]},
    {number: 11, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 12, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}]},
    {number: 13, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}]},
    {number: 14, data: [{img:2, title: '虾类'}, {img: 3, title:'鱼类'}, {img: 4, title: '蟹类'}, {img: 5, title: '鱿鱼'}, {img: 6, title: '海参'}, {img: 7, title: '贝类'}, {img: 3, title: '鸡肉'}]},
]

const ClassifyNav = () => (
    <div className="content-container-nav">
        <ul>
            {
                linkList.map(item => (
                    <li key={'classify'+item.number}>
                        <NavLink to={`/classify/${item.number}`} activeClassName="classify-active">{item.name}</NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
)

const ClassifyItem = (props) => {
    const number = props.match.params.number;
    const data = itemData.filter( item => {
        return item.number == number;
    })[0];
    return (
        <ul className="content-list">
            {
                data['data'].map( (item, index) => {
                    return (
                        <li key={'classify.z'+index}>
                            <img src={require(`../assets/images/class${item.img}.png`)} alt=""/>
                            <span>{item.title}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const ClassifyBody = () => (
    <div className="content-container-body">
        <div className="content">
            <img src={require('../assets/images/class1.png')} alt=""/>
            <h1>分类</h1>
            <Switch>
                <Route exact path='/classify/:number' component={ClassifyItem} />
                <Redirect from="/classify" to="/classify/1"></Redirect> 
            </Switch>
        </div>
    </div>
)

export default () => (
    <div className="classify">
        <Headers />
        <div className="content-container">
            <ClassifyNav />
            <ClassifyBody />
        </div>
    </div>
)