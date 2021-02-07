import React from "react"
import { Input, List, Avatar } from 'antd'
import MenuList from "./menuList"
import { Switch, Route } from "react-router-dom";
import FriendInfo from "./friendInfo";
import GroupInfo from "./groupInfo";
import Blank from "./blank";

require("../game.css");

const Friends = ({match}) => {
  const {Search} = Input;
  const onSearch = value => {
    console.log(value);
  }
  return(
    <div className={"friends"}>
      <div className={"connectList"} style={{overflowY: "auto"}}>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <MenuList></MenuList>
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
