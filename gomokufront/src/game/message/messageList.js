import React, {Component} from 'react';
import {Avatar, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";


const { SubMenu } = Menu;

const data = [
  {
    "key": 5,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 6,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 7,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 8,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 9,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 10,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 11,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 12,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 13,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 14,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 15,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 16,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 17,
    "title": "周杰伦",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 18,
    "title": "周杰伦18",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 19,
    "title": "周杰伦18",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 20,
    "title": "周杰伦18",
    "pathname": "/game/message/messageInfo",
  },
  {
    "key": 21,
    "title": "周杰伦18",
    "pathname": "/game/message/messageInfo",
  },
]

class MessageList extends Component {
  constructor(props) {
    super(props);
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
              <Link to={menu}>{menu.title}</Link>
            </Menu.Item>
          )
        }
      })
    )
  }

  render() {

    return (
      <Menu mode="inline" style={{ width: '100%' }}>
        {this.recrusion(data)}
      </Menu>
    )
  }
}

export default MessageList
