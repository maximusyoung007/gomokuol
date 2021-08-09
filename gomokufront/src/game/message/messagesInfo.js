import React, {useEffect} from 'react'
import { Button } from "antd";
import { SmileOutlined, FolderOutlined, ScissorOutlined } from '@ant-design/icons';
import myAvatar from './avatar.jpg';
import others from './others.jpeg';


require('../game.css')

const messageInfo = [
  {
    "key": 5,
    "title": "me",
    'chatContent': '你好'
  },
  {
    "key": 6,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 7,
    "title": "me",
    'chatContent': '你好'
  },
  {
    "key": 8,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 9,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 10,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 11,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 12,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 13,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 14,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 15,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 16,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 17,
    "title": "周杰伦",
    'chatContent': '你好'
  },
  {
    "key": 18,
    "title": "周杰伦18",
    'chatContent': '你好'
  },
  {
    "key": 19,
    "title": "周杰伦18",
    'chatContent': '你好'
  },
  {
    "key": 20,
    "title": "周杰伦18",
    'chatContent': '你好'
  },
  {
    "key": 21,
    "title": "周杰伦18",
    'chatContent': '你好'
  },
]

const MessageInfo = (props) => {
  var ws;
  var username = localStorage.getItem("username");
  useEffect(() => {
    ws = new WebSocket("ws://localhost:7002/websocket/admin");
  })
  function sendMessage() {
    console.log("发送信息");
    if (ws.readyState == 1) {
      var editContent = document.getElementsByClassName("editArea")[0].innerHTML;
      var message = {"message": editContent, "username": username, "to":"toUser"};
      ws.send(JSON.stringify(message));
    }
  }
  const messageList = messageInfo.map((chat) =>
    chat.title === "me" ?
    <div key={chat.key} className={'message-me'}>
      <img className={'message-me-avatar'} src={myAvatar}/>
      <div className={'content-me'}>
        <div className={'bubble-content'}>
          <div className={'bubble'}>
            <div className={'plain'}>
              <div className={'message-plain'}>
                {chat.chatContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> :
    <div key={chat.key} className={'message-others'}>
      <img className={'message-others-avatar'} src={others}/>
      <div className={"content-others"}>
        <h4 className={'other-names'}>{chat.title}</h4>
        <div className={'bubble-content-others'}>
          <div className={'bubble-others'}>
            <div className={'plain-others'}>
              <div className={'message-plain-others'}>
                {chat.chatContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return(
    <div>
      <div className={'box_hd'}>
        <div className={'title_wrap'}>
          <div className={'title'}>
            <a className={'title_name'}>
              周杰伦
            </a>
          </div>
        </div>
      </div>
      <div className={'chat'}>
        <div className={'chat-bd'}>
          <div className={'scope'}>
            {messageList}
          </div>
        </div>
      </div>
      <div className={'chat-box-foot'}>
        <div className={'toolbar'}>
          <Button type="link" icon={<SmileOutlined/>} size="large"></Button>
          <Button type="link" icon={<ScissorOutlined />} size="large"></Button>
          <Button type="link" icon={<FolderOutlined/>} size="large"></Button>
        </div>
        <pre className={'editArea'}></pre>
        <div className={'action'}>
          <span className={'desc'}>按下cmd+enter换行</span>
          <Button onClick={() => sendMessage()}>发送</Button>
        </div>
      </div>
    </div>
  )
}
export default MessageInfo
