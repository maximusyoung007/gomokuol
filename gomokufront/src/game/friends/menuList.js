import React, {Component} from 'react';
import {Avatar, Menu} from "antd";
import { UserOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";


const { SubMenu } = Menu;

const data = [
  {
    "key": 1,
    "icon": "appstore",
    "title": "群聊",
    "pathname": "",
    "children": [
      {
        "key": 3,
        "title": "你问我爱你有多深",
        "pathname": "/game/friends/groupInfo",
      },
      {
        "key": 4,
        "title": "我依然爱你那么深",
        "pathname": "/game/friends/groupInfo",
      }
    ],
  },
  {
    "key": 2,
    "icon": "setting",
    "title": "好友",
    "pathname": "",
    children: [
      {
        "key": 5,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 6,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 7,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 8,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 9,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 10,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 11,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 12,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 13,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 14,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 15,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 16,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 17,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
        "key": 18,
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      }
    ]
  }
]

class MenuList extends Component {
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

export default MenuList
