import React, {useEffect, useState} from 'react'
import { Button } from "antd";
import { SmileOutlined, FolderOutlined, ScissorOutlined } from '@ant-design/icons';
import myAvatar from './avatar.jpg';
import others from './others.jpeg';
import axios from '../../interceptor/interceptor';

require('../game.css')

const MessageInfo = ({match}) => {
  var username = localStorage.getItem("username");
  const toPerson = match.params.toPerson;
  console.log(toPerson);
  const[messageInfo, setMessageInfo] = useState([]);
  var ws = new WebSocket("ws://localhost:7002/websocket/" + username);
  useEffect(() => {
    axios({
      method: 'post',
      url: "/game/messages/getMessages",
      data: {
        "fromPerson": username,
        "toPerson": toPerson
      }
    }).then(function(data) {
      setMessageInfo(data.messages);
    })
  }, [])
  function sendMessage() {
    console.log("发送信息");
    // console.log(ws.readyState);
    var editContent = document.getElementsByClassName("editArea")[0].innerHTML;
    axios({
      method: 'post',
      url: "/game/messages/addMessage",
      data: {
        "fromPerson": username,
        "toPerson": toPerson,
        "message": editContent
      }
    }).then(function(data) {
      console.log(data);
      if (data.success) {
        var newMessage = data.data;
        setMessageInfo(newMessage.concat(messageInfo));
      }
    })
    console.log(ws);
    if (ws.readyState == 1) {
      var message = {"message": editContent, "username": username, "to":"toUser"};
      ws.send(JSON.stringify(message));
    }
  }
  const messageList = messageInfo.map((chat) =>
    chat.title === username ?
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
              {toPerson}
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
