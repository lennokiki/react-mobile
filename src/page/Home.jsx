'use strict'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Headers from './Headers'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/assets/style/home.scss'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'



//轮播图
class Banner extends React.Component {
  render() {
      return (
        <div className="home-banner">
          <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay infiniteLoop>
              <div>
                  <img src={banner1} />
              </div>
              <div>
                  <img src={banner2} />
              </div>
              <div>
                  <img src={banner3} />
              </div>
          </Carousel>
        </div>
      );
  }
}


//内容区
class Content extends React.Component {
  constructor(props){
    super(props)
  }

  toSubMenu(path){
    console.log(path);
  }

  render() {
    //子导航菜单
    const subNav = [
      {path: '/classify/hot', title: '热销'}, 
      {path: '/classify/marine', title: '水产'}, 
      {path: '/classify/vegetables', title: '蔬菜'}, 
      {path: '/classify/fruit', title: '鲜果'}, 
      {path: '/classify/juice', title: '饮品甜品'}, 
      {path: '/classify/dish', title: '菜品'}, 
    ];
    //滚动数据
    const infoList = [
      {path: '/1', title: '1.入口即化的棉花蛋糕《此配方来自天空之城》入口即化的棉花蛋糕《此配方来自天空之城入口即化的棉花蛋糕《此配方来自天空之城'},
      {path: '/2', title: '2.入口即化的棉花蛋糕《此配方来自天空之城》'},
      {path: '/3', title: '3.入口即化的棉花蛋糕《此配方来自天空之城》'},
      {path: '/4', title: '4.入口即化的棉花蛋糕《此配方来自天空之城》'},
      {path: '/5', title: '5.入口即化的棉花蛋糕《此配方来自天空之城》'}
    ];
    //tab滑动数据
    const scrollList = [
      {path: '/scroll1', name: '精选海南芒果', price: '27.80'},
      {path: '/scroll2', name: '清炒大虾仁', price: '19.40'},
      {path: '/scroll3', name: '澳洲无脊小牛肉', price: '57.80'},
      {path: '/scroll4', name: '阿拉斯加卷芯海带', price: '37.80'},
      {path: '/scroll5', name: '精品德州扒鸡', price: '79.99'},
      {path: '/scroll6', name: '精选海南芒果', price: '34.20'},
    ];

    return (
      <div className="home-content">
        <ul className="sub-nav">
          {
            subNav.map( (item,index) => (
              <li key={item.path} onClick={ () => this.toSubMenu(item.path) }>
                  <img src={require(`../assets/images/tab${index+1}.png`)} />
                  <span>{item.title}</span>
              </li>
            ))
          }
        </ul>
        <div className="sub-info">
          <div className="sub-info-logo"></div>
          <ul className="sub-info-msg">
            {
              infoList.map( item => (
                <li key={item.path}>{item.title}</li>
              ))
            }
          </ul>
        </div>
        <div className="scroll-nav">
          <div className="timer-container">
            <span></span>
            <i>现时秒杀</i>
            <p><span>1</span><span>1</span><i>:</i><span>5</span><span>7</span><i>:</i><span>5</span><span>6</span></p>
          </div>
          <div className="scroll-container">
            <button className="scroll-container-left"></button>
            <div className="scroll-container-inneer">
              <div className="container-inner-item">
                <ul>
                  {
                    scrollList.map( (item, index) => (
                      <li key={item.path}>
                        <img src={require(`../assets/images/food${index+1}.png`)} alt=""/>
                        <p>{item.name}</p>
                        <span>￥{item.price}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </div>
            <button className="scroll-container-right"></button>
          </div>
        </div>
        <div className="good-content">
          <div className="content-header">
            <div><span>优选清单</span></div>
            <span>更多清单</span>
          </div>
          <div className="content-body">
            <div className="content-body-top">
              <img src={require('../assets/images/fruit.png')} alt=""/>
              <div className="body-top-right">
                <div className="body-top-right-left">
                  <img src={require('../assets/images/hot5.png')} className="margin-b-2" alt=""/>
                  <div className="body-top-right-left-bot">
                    <div className="one-list margin-r-2">
                      <img src={require('../assets/images/hot2.png')} alt=""/>
                      <p>青岛大虾</p>
                      <span>￥88.00</span>
                    </div>
                    <div className="one-list">
                      <img src={require('../assets/images/hot3.png')} alt=""/>
                      <p>网易小黑猪</p>
                      <span>￥27.99</span>
                    </div>
                  </div>
                </div>
                <div className="body-top-right-right">
                  <div className="one-list margin-b-2">
                    <img src={require('../assets/images/hot1.png')} alt=""/>
                    <p>金针榴莲2.25g</p>
                    <span>￥27.99</span>
                  </div>
                  <div className="one-list">
                    <img src={require('../assets/images/hot4.png')} alt=""/>
                    <p>木须肉盖饭</p>
                    <span>￥14.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body-bot">
              <img src={require('../assets/images/icon5.png')} alt=""/>
              <img src={require('../assets/images/icon8.png')} alt=""/>
            </div>
          </div>
        </div>
        <div className="good-content">
          <div className="content-header">
            <div><span>为您推荐</span></div>
            <span>更多商品</span>
          </div>
          <div className="content-body">
            <div className="content-body-top">
              <img src={require('../assets/images/fruit.png')} alt=""/>
              <div className="body-top-right">
                <div className="body-top-right-left">
                  <img src={require('../assets/images/hot5.png')} className="margin-b-2" alt=""/>
                  <div className="body-top-right-left-bot">
                    <div className="one-list margin-r-2">
                      <img src={require('../assets/images/hot2.png')} alt=""/>
                      <p>青岛大虾</p>
                      <span>￥88.00</span>
                    </div>
                    <div className="one-list">
                      <img src={require('../assets/images/hot3.png')} alt=""/>
                      <p>网易小黑猪</p>
                      <span>￥27.99</span>
                    </div>
                  </div>
                </div>
                <div className="body-top-right-right">
                  <div className="one-list margin-b-2">
                    <img src={require('../assets/images/hot1.png')} alt=""/>
                    <p>金针榴莲2.25g</p>
                    <span>￥27.99</span>
                  </div>
                  <div className="one-list">
                    <img src={require('../assets/images/hot4.png')} alt=""/>
                    <p>木须肉盖饭</p>
                    <span>￥14.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body-bot">
              <img src={require('../assets/images/icon5.png')} alt=""/>
              <img src={require('../assets/images/icon8.png')} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default () => (
  <div className="home">
    <Headers />
    <Banner />
    <Content />
  </div>
)