import React from "react"
import { Input, List, Avatar } from 'antd'

require("../game.css");

const data = [
  {
    title: '虚假的好友 1',
  },
  {
    title: '虚假的好友 2',
  },
  {
    title: '虚假的好友 3',
  },
  {
    title: '虚假的好友 4',
  },
];

const Friends = () => {
  const {Search} = Input;
  const onSearch = value => {
    console.log(value);
  }
  return(
    <div className={"friends"}>
      <div className={"friendsList"}>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>

              <Avatar shape={"square"} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span style={{float: "left"}}>{item.title}</span>

            </List.Item>
          )}
        />
      </div>
      <div className={"friendInfo"}>

      </div>
    </div>
  )
}

export default Friends
