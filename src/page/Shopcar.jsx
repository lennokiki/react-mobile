'use strict'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import '../assets/style/shopcar.scss'

const timer = null;
//头部
class ShopHeader extends React.Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
    }

    edit() {
        this.props.editHandler(!this.props.edit);
    }

    render() {
        return (
            <div className="shop-header">
                <h1>购物车</h1>
                <button onClick={this.edit}>{this.props.edit ? '完成' : '管理'}</button>
            </div>
        )
    }
}

//底部结算单
class ShopFooter extends React.Component {
    constructor(props){
        super(props)
    }

    allChangeSelect() {
        this.props.allChangeSelect(!this.props.data.allSelected);
    }

    render() {
        return (
            <div className="shop-footer">
                <div className="shop-footer_info">
                    <div className="shop-footer_info-select" onClick={this.allChangeSelect.bind(this)}>
                        <i className={`${this.props.data.allSelected ? 'active' : ''}`}></i>
                        <span>全选</span>
                    </div>
                    <p>合计：<span>￥{this.props.data.allPrice}</span></p>
                </div>
                <button>结算<span>{this.props.data.allCount === 0 ? '' : '('+this.props.data.allCount+')'}</span></button>
            </div>
        )
    }
}

// 数据列表
class ShopMain extends React.Component {
    constructor(props){
        super(props)
    }

    changeSelect(key) {
        this.props.changeSelect(key);
    }

    showDelContainer() {
        if(!this.props.isSelected) {
            return this.props.showMsg('亲，还没有选择要删除的宝贝哦！');
        }
        this.props.showDelContainer();
    }

    calcCount(index, type){
        this.props.calcCount(index, type);
    }

    render() {
        const data = this.props.data;
        const len = data.length;
        const edits = this.props.edit;
        return (
            <div className="shop-main">
                <CSSTransition
                    in={edits}
                    timeout={300}
                    classNames="shopcardel"
                    unmountOnExit
                    >
                        <div className={`edit-container ${this.props.edit? '' : '' }`}>
                            <p>删除有风险，需谨慎</p>
                            <button onClick={this.showDelContainer.bind(this)}>删除</button>
                        </div>
                </CSSTransition>
                 
                {
                    len !== 0 ?
                    <ul className="shop-main-container">
                        {
                            data.map( (item, index) => (
                                <li className="shop-main-list" key={'shopcar'+index}>
                                    <span className={`list-select ${item.selected === 2 ? 'active' : ''}`} onClick={this.changeSelect.bind(this, index)}></span>
                                    <img src={require(`../assets/images/${item.img}`)} alt=""/>
                                    <div className="list-info">
                                        <p>{item.title}</p>
                                        <span>￥{item.price}</span>
                                    </div>
                                    <div className="list-calc">
                                        <button className="list-calc-reduce" onClick={this.calcCount.bind(this, index, 'd')}>-</button>
                                        <span>{item.count}</span>
                                        <button className="list-calc-add" onClick={this.calcCount.bind(this, index, 'a')}>+</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul> :
                    <h2 className="shop-nodata">购物车空空的</h2>
                }


            </div>
        )
    }
}

class Msg extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="shop-msg">{this.props.msg}</div>
        )
    }
}

class DelContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    delList() {
        this.props.delList();    
    }

    showDelContainer() {
        this.props.showDelContainer();
    }

    render() {
        return (
            <div className="del-container">
                <div className="container-box">
                    <div className="del-title">
                        <p>提示</p>
                        <span></span>
                    </div>
                    <p>确定要删除吗？</p>
                    <div className="del-container-button">
                        <button onClick={this.showDelContainer.bind(this)}>取消</button>
                        <button onClick={this.delList.bind(this)}>确定</button>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default class ShopCar extends React.Component {
    constructor(){
        super();
        this.state = {
            edit: false, //是否显示删除按钮
            data: [
                {img: 'shop1.png', title: '光明 赏味奶酪乳风味发酵乳 原味无添加酸奶 135*5', price: '19.96', selected: 2, count: 2},
                {img: 'per19.png', title: '新阿拉斯加帝王蟹 澳大利亚大龙虾 50斤装 散装', price: '12.15', selected: 1, count: 1},
                {img: 'dis6.png', title: '宫保鸡丁盖饭 木酥肉盖饭 京酱肉丝打浆菜 韩国泡菜', price: '6.60', selected: 1, count: 1},
                {img: 'food3.png', title: '新奥尔良 大烤鸡 孜然烤肉 果木烤鸭北京烤鸭 红烧肉', price: '9.92', selected: 1, count: 1},
            ],
            delState: false,
            msg: ''
        }
    }

    editHandler(edit) {
        this.setState({edit})
    }

    showMsg(msg) {
        clearTimeout(timer);
        this.setState({msg});
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            this.setState({msg: ''});
        }, 2000)
    }

    changeSelect(key) {
        const data = Object.assign([], this.state.data);
        data[key]['selected'] = data[key]['selected'] == 1 ? 2 : 1;
        this.setState({data: data});
    }

    allChangeSelect(type) {
        const selectedType = type && 2 || 1;
        const data = this.state.data.map( item => {
            item.selected = selectedType;
            return item;
        })
        this.setState({data});
    }

    calcCount (index, type) {
        const data = Object.assign([], this.state.data);
        let count = data[index]['count'];
        if (type === 'a') {
            data[index]['count'] = ++count;    
        } else {
            if (!--count) {
                data[index]['count'] = 1;    
                this.showMsg('亲，不能再减少了哦');
            } else {
                data[index]['count'] = count;
            }
        }
        this.setState({data});
    }

    delList() {
        const data = this.state.data.filter( item => {
            return item.selected == 1;
        })
        this.setState({data, delState: false});
        this.showMsg('删除成功！');
    }

    showDelContainer() {
        this.setState({delState: !this.state.delState})
    }

    render() {
        const data = this.state.data;
        const selectData = data.filter(item => {
            return item.selected == 2
        });
        const allPrice = selectData.length !== 0 ? selectData.map(item => +item.price * +item.count)
                                    .reduce( (pre, cur) => pre+cur ) : 0;
        const footerData = {
            allSelected: data.length !== 0 ? data.every(item => item.selected === 2) : false,
            allCount: selectData.length,
            allPrice: parseFloat(allPrice.toFixed(2))
        }
        return (
            <div className="shopcar">
                <ShopHeader  
                    edit={this.state.edit} 
                    editHandler={this.editHandler.bind(this)}/>
                <ShopMain 
                    edit={this.state.edit} 
                    data={this.state.data} 
                    isSelected={selectData.length}
                    calcCount={this.calcCount.bind(this)}
                    showMsg={this.showMsg.bind(this)}
                    changeSelect={this.changeSelect.bind(this)}
                    showDelContainer={this.showDelContainer.bind(this)}/>
                <ShopFooter 
                    data={footerData}
                    allChangeSelect={this.allChangeSelect.bind(this)}/>
                { 
                    this.state.delState ? 
                    < DelContainer 
                        delList={this.delList.bind(this)} 
                        showDelContainer={this.showDelContainer.bind(this)} 
                        delList={this.delList.bind(this)}/> :
                    ''
                }
                {
                    this.state.msg ? 
                    <Msg msg={this.state.msg}/> :
                    ''
                }
            </div>
        )
    }
}