import React, {Component} from 'react';
import {Avatar, Menu, message} from "antd";
import { UserOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";
import axios from "../../interceptor/interceptor";


const { SubMenu } = Menu;

let data1 = [
  {
    "title": "群聊",
    "pathname": "",
    "children": [
      {
        "title": "你问我爱你有多深",
        "pathname": "/game/friends/groupInfo",
      },
      {
        "title": "我依然爱你那么深",
        "pathname": "/game/friends/groupInfo",
      }
    ],
  },
  {
    "title": "好友",
    "pathname": "",
    "children": [
      {
        "title": "周杰伦",
        "pathname": "t",
      },
      {
        "title": "周杰伦",
        "pathname": "/game/friends/friendInfo",
      },
      {
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
    axios({
      method: 'post',
      url: 'user/getFriendList',
      data:{

      }
    }).then(function(data){
      data1 = data;
      console.log(data);
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
        {this.recrusion(data1)}
      </Menu>
    )
  }
}

export default MenuList
