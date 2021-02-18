import React from "react"
import { io } from 'socket.io-client';
const socket = io('ws://localhost:80')

const AboutMe = () => {
  socket.emit('chat', {name: 'abc'}, data => console.log(data));

  return(
    <div>
        about me
    </div>
  )
}
export default AboutMe;
