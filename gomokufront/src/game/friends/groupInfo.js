import React from "react";
import {Button, Card} from "antd";
import groupChat from "./groupChat.svg";
require("../game.css");

const {Meta} = Card;

const GroupInfo = () => {
  return(
    <div className={"groupInfo"}>
      <div className={"groupAvatar"}>
        <Card
          style={{ width: 240 }}
          bordered={false}
          cover={<img alt="example" src={groupChat} />}
        >
          <Meta title="你问我爱你有多深" style={{textAlign: 'center'}}/>
        </Card>
      </div>
      <div className={"operateGroup"}>
        <Button type="primary" size={"large"}>进入群聊</Button>
        <br/>
        <Button type="link" size={"default"}>从通讯录中删除</Button>
      </div>
    </div>
  )
}

export default GroupInfo;
