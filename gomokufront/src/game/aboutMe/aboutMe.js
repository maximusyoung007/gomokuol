import React from "react"
import {Button} from "antd";
const AboutMe = () => {
  const testws = () => {
    console.log("测试socket");
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
