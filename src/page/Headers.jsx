import React from 'react'
import '../assets/style/headers.scss'
import search from '../assets/images/icon2.png'
import add from '../assets/images/add.png'
//导航菜单
export default class Headers extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div className="header">
          <div className="header_container">
            <img src={add} className="header_add"/>
            <div className="input_container">
              <img src={search}/>
              <span>全壳青口贝 秋刀鱼</span>
            </div>
            <div className="msg">
              <span>123</span>
            </div>
          </div>
        </div>
      )
    }
  }