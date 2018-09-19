import React,{Component} from 'react'
import {connect} from 'react-redux'
/*
* 大神主界面路由组件
* */

class Dashen extends Component{
  render(){
    return(
      <div>Dashen</div>
    )
  }
}
export default connect(
  state=>({}),
  {}
)(Dashen)