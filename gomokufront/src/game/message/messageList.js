import React, {Component} from 'react';
import {Avatar, Menu, message} from "antd";
import { UserOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";
import axios from "../../interceptor/interceptor";


const { SubMenu } = Menu;


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {messagePerson: []}
    var that = this;
    axios({
      method: 'post',
      url: 'messagePerson/getMessagePerson',
      data:{
        "fromPerson": localStorage.getItem("username")
      }
    }).then(function(data){
      that.setState({messagePerson: data.data});
    })
  }

  recrusion(dataSource) {
    return(
      dataSource.map((menu, index) => {
        if(menu.children) {
          return (
            <SubMenu key={menu.key} title={menu.title}>
              {this.recrusion(menu.children)}
            </SubMenu>
          )
        } else {
          return(
            <Menu.Item key={menu.key}>
              <Avatar shape="square" icon={<UserOutlined />} style={{marginRight: "4px"}} />
              <Link to={menu.path}>{menu.title}</Link>
            </Menu.Item>
          )
        }
      })
    )
  }

  render() {

    return (
      <Menu mode="inline" style={{ width: '100%' }}>
        {this.recrusion(this.state.messagePerson)}
      </Menu>
    )
  }
}

export default MessageList
