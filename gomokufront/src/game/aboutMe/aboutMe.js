import React from "react"
import { io, Manager } from 'socket.io-client';
import {Button} from "antd";
const manager = new Manager("ws://127.0.0.1:801", {
  transports: ['websocket']
});
const socket = manager.socket("events")
// const socket = io('ws://127.0.0.1:801', {
//   path: '/socket.io'
// });
const AboutMe = () => {
  const testws = () => {
    console.log("测试wbsocket");
    // const socket = new WebSocket("ws://127.0.0.1:801");
    // socket.addEventListener('open', function (event) {
    //   socket.send('hello server');
    // })
    socket.emit('events', {name: 'nest'}, data => console.log(data));
  }

  return(
    <div>
      <Button onClick={testws}>
        测试socket
      </Button>
    </div>
  )
}
export default AboutMe;
