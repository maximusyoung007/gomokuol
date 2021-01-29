import React, {useState} from "react";
import {useLocation} from "react-router";
import testAvatar from './avatar.png'
import FemaleIcon from "./FemaleIcon";
import MaleIcon from "./maleIcon";
import {Link} from "react-router-dom";
import { Button } from "antd";

const FriendInfo = () => {
  let location = useLocation();
  const [test,setTest] = useState(1);
  let icon;
  if(test == 1) {
    icon = <MaleIcon style={{fontSize: '24px'}}/>
  } else {
    icon = <FemaleIcon style={{fontSize: '24px'}}/>
  }

  const message = {
    pathname: "/game/message"
  }

  return(
    <div className={"friendInfo"}>
      <div className={"profile"}>
        <div className={"friendAvatar"}>
          <img src={testAvatar} style={{width: '100px', height: '100px',}}/>
        </div>
        <div className={"nickNameArea"}>
          <h4 className={"nickname"}>JayZhou周杰伦</h4>
          {icon}
        </div>
        <div className={"meta-area"}>
          <div className={"meta-area-item"}>
            <label className={"friend-label"}>备注：</label>
            <p className={"friend-p"}>虚假的周杰伦</p>
          </div>
          <div className={"meta-area-item"}>
            <label className={"friend-label"}>地区：</label>
            <p className={"friend-p"}>江苏 南京</p>
          </div>
        </div>
        <div className={"action-area"}>
          <Button type="primary" size='large'>
            <Link to={message}>发消息</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FriendInfo;
