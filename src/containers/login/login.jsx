import React, {Component} from 'react'
import {NavBar,WingBlank,List,WhiteSpace,InputItem,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
/*
登陆路由组件
 */
export default class Login extends Component {
  state={
    username:'',
    password:''
  }
  handleChang=(name,value)=>{
    this.setState({
      [name]:value
    })
  }
  goregister=()=>{
    this.props.history.replace('./register')
  }

  render () {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入用户名" onChange={value=>this.handleChang('username',value)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder="请输入密码" onChange={value=>this.handleChang('password',value)}>密码：</InputItem>
            <WhiteSpace/>
            <Button type='primary'>登&nbsp;&nbsp;录</Button>
            <WhiteSpace/>
            <Button onClick={this.goregister}>还未注册？</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}