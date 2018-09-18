import React, {Component} from 'react'

import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {register} from '../../redux/actions'

import Logo from '../../components/logo/logo'
import {reqRegister} from '../../api'


const ListItem = List.Item

/*
注册路由组件
 */

/*
export default class Register extends Component {
  state={
    username:'',
    password:'',
    password2:'',
    type:'dashen'
  }

  handleChang=(name,value)=>{
    this.setState({
      [name]:value
    })
  }
  register=()=>{
    alert('注册成功')
  }
  gologin=()=>{
    this.props.history.replace('./login')
  }

  render () {
    const {type}=this.state
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder="请输入用户名" onChange={value=>this.handleChang('username',value)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder="请输入密码" onChange={value=>this.handleChang('password',value)}>密码：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder="请输入确认密码" onChange={value=>this.handleChang('password2',value)}>确认密码：</InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型：</span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={()=>this.handleChang('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={()=>this.handleChang('type','laoban')}>老板</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.gologin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
*/


class Register extends Component {
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'
  }
  //处理输入发生改变的监听回调
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  //注册的回调
  register = () => {
    console.log('注册成功')
    this.props.register(this.state)
    // reqRegister(this.state).then(response=>{
    //   console.log(response.data)
    // })
  }
  goLogin = () => {
    //编程式路由导航（跳转）
    this.props.history.replace('/login')
  }

  render() {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    // 如果redirectTo有值, 就需要自动跳转到对应的路径
    if (redirectTo) {
      return <Redirect to={redirectTo}></Redirect>
    }
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <p>{msg}</p> : null}
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder='请输入密码' onChange={val => this.handleChange('password', val)}>密码：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder='请输入确认密码' onChange={val => this.handleChange('password', val)}>确认密码：</InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型：</span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'laoban'}
                     onChange={() => this.handleChange('type', 'laoban')}>老板</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'dashen'}
                     onChange={() => this.handleChange('type', 'dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
            </List.Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),//提供一般属性，读状态数据显示
  {register}//更新状态
)(Register)