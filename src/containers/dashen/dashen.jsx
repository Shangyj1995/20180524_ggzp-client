import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/actions"
import UserList from '../../components/user-list/user-list'

/*
* 大神主界面路由组件
* */
class Dashen extends Component{
  componentDidMount(){
    //发送异步请求从后台获取userList到redux的userList状态
    this.props.getUserList('laoban')
  }
  render(){
    return(
      <UserList userList={this.props.userList}/>
    )
  }
}
export default connect(
  state=>({userList:state.userList}),
  {getUserList}
)(Dashen)