import React, {useEffect, useState} from "react"
import { Input, List, Avatar } from 'antd'
import MenuList from "./menuList"
import { Switch, Route } from "react-router-dom";
import FriendInfo from "./friendInfo";
import GroupInfo from "./groupInfo";
import Blank from "./blank";
import axios from "../../interceptor/interceptor";

require("../game.css");

const Friends = ({match}) => {
  const {Search} = Input;
  const [connectList, setConnectList] = useState(null);
  const onSearch = value => {
    console.log(value);
  }

  // useEffect(() => {
  //   console.log("获取好友列表");
  //   axios({
  //     method: 'post',
  //     url: 'user/getFriendList',
  //     data:{
  //
  //     }
  //   }).then(function(data){
  //     console.log(data);
  //     setConnectList(data.data);
  //   })
  // })


  return(
    <div className={"friends"}>
      <div className={"connectList"} style={{overflowY: "auto"}}>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <MenuList name={connectList}></MenuList>
      </div>
      <div className={"connectInfo"}>
          <Switch>
            <Route exact path={`${match.url}`} component={Blank}/>
            <Route path={`${match.url}/groupInfo`} component={GroupInfo}/>
            <Route path={`${match.url}/friendInfo`} component={FriendInfo}/>
          </Switch>
      </div>
    </div>
  )
}

export default Friends
