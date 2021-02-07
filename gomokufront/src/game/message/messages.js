import React from "react";
import MessageList from "./messageList";
import { Input } from "antd";
import { Switch, Route } from "react-router-dom";
import MessageInfo from "./messagesInfo";
import Blank from '../friends/blank';

require("../game.css");

const Messages = ({match}) => {
  const { Search } = Input;
  const onSearch = value => {

  }
  return(
      <div className={"messages"}>
        <div className={"messagesList"} style={{overflowY: 'auto'}}>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <MessageList></MessageList>
        </div>
        <div className={"messageInfo"}>
          <Switch>
            <Route exact path={`${match.url}`} component={Blank}/>
            <Route path={`${match.url}/messageInfo`} component={MessageInfo}/>
          </Switch>
        </div>
      </div>
  )
}

export default Messages
