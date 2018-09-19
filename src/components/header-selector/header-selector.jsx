import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {
  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }
  state = {
    //当前选择的图片对象
    icon: null,
  }
  //选择头像的回调
  //对应的数据对象
  selectHeader = ({icon, text}) => {
    //更新自身icon状态
    this.setState({
      icon
    })
    //更新父组件的header状态
    this.props.setHeader(text)
  }

  render() {
    const headerList = []
    for (var i = 0; i < 20; i++) {
      headerList.push({
        //必须用require()动态加载一个图片模板
        icon: require('./images/头像' + (i + 1) + '.png'),
        text: '头像' + (i + 1)
      })

    }
    //动态确定头部
    const {icon} = this.state
    const headerUI = icon ? <div><span>已选择头像</span><img src={icon}/></div> : '请选择头像'
    return (
      <List renderHeader={() => headerUI}>
        <Grid data={headerList}
              coulumnNum={5}
              onClick={this.selectHeader}></Grid>
      </List>
    )
  }
}
