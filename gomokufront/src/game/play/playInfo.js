import React,{useState} from "react"
import {Card,Button,Avatar} from "antd";
import others from '../message/others.jpeg';
import me from '../message/avatar.jpg';
import CountDown from "./countdown";

require("../game.css")
const {Meta} = Card

const PlayInfo = () => {
  const tabList = [
      {
          key:"chat",
          tab:"聊天"
      },
      {
          key:"history",
          tab:"历史"
      },
      {
          key:"player",
          tab:"玩家"
      }
  ]
  const contentList = {
    chat:
      <div className={"playInfo"}>
        <p>聊天</p>
        <Button className={"playInfoButton"} size={"small"} type="primary">发送</Button>
      </div>,
    history:
      <div className={"playInfo"}>
        <p>history</p>
        <Button className={"playInfoButton"} size={"small"} type="primary">保存</Button>
      </div>,
    player: <textarea className={"playInfo"}>玩家</textarea>
  }

  const playInfo1 = {
    playerName: '周杰伦',
    score: '1600'
  }
  const playInfo2 = {
    playerName: '活了一万次的猫',
    score: '1601'
  }


  const [infoKey,setInfoKey] = useState("history");

  const onTabChange = (key) => {
      setInfoKey(key);
  };

  return(
      <div>
          <Card
              style={{ width: 280 ,marginTop:"16px"}}
          >
              <Meta
                  avatar={<Avatar src={others} />}
                  title={playInfo1.playerName}
              />
              <div className='score'>积分: {playInfo1.score}</div>
              <div>
                <span style={{float: 'left'}}>倒计时：</span>
                <CountDown hours='0' minutes='15' seconds='0'/>
              </div>
          </Card>
          <Card
              style={{ width: 280}}
          >
              <Meta
                  avatar={<Avatar src={me} />}
                  title={playInfo2.playerName}
              />
              <div className='score'>积分: {playInfo2.score}</div>
              <div>
                <span style={{float: 'left'}}>倒计时：</span>
                <CountDown hours='0' minutes='15' seconds='0'/>
              </div>
          </Card>
          <Card
              style={{ width: 280 }}
              tabList={tabList}
              activeTabKey={infoKey}
              onTabChange={key => {
                  onTabChange(key);
              }}
          >
              {contentList[infoKey]}
          </Card>
      </div>
  )
}

export default PlayInfo;
