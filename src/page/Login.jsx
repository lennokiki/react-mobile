import React from 'react'
import '../assets/style/login.scss'

let timer = null;

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            msg: ''
        }
    }

    back() {
        this.props.history.push('/');
    }

    handleChange(e, type) {
        this.setState({[type]: e.target.value});
    }

    showMsg(msg) {
        clearTimeout(timer);
        this.setState({msg});
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            this.setState({msg: ''});
        }, 1500)
    }

    login() {
        if ( this.state.username.trim() === '') {
            return this.showMsg('请输入账号');
        }
        if (this.state.password.trim() === '') {
            return this.showMsg('请输入密码');
        }
        this.showMsg('登录成功！');
        localStorage.setItem('username', this.state.username);
        setTimeout(() => {
            this.props.history.push('/user');
        }, 1500)
    }

    render() {
        return (
            <div className="login">
                <span onClick={this.back.bind(this)}>Back</span>
                <div className="login-top">
                    <span></span>
                </div>
                <div className="login-content">
                    <div className="login-info">
                        <div className="login-input">
                            <input type="text" placeholder="用户名/手机号/邮箱" value={this.state.username} onChange={ e => this.handleChange(e, 'username')}/>
                            <i className="login-user-icon"></i>
                        </div>
                        <div className="login-input">
                            <input type="text" placeholder="密码" value={this.state.password}  onChange={ e => this.handleChange(e, 'password')}/>
                            <i className="login-pass-icon"></i>
                        </div>
                    </div>
                    <button onClick={this.login.bind(this)}>立即登录</button>
                    <div className="login-other">
                        <span>注册账户</span>
                        <span>忘记密码？</span>
                    </div>
                    <div className="login-auth">
                        <div className="login-auth login-auth-qq"></div>
                        <span></span>
                        <div className="login-auth login-auth-weixin"></div>
                    </div>
                </div>
                {
                    this.state.msg ? 
                    <div className="login-msg">{this.state.msg}</div> :
                    ''
                }
            </div>
        )
    }
}