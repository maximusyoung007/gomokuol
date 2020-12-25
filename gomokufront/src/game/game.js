import React,{useState} from 'react';
import {Router, useLocation} from "react-router";
import {Link, Route, Switch} from "react-router-dom"
import GameHeader from "./gameHeader"
import {Button, Menu} from "antd";
import Lobby from "./gameLobby/gameLobby";
import Messages from "./message/messages";
import Friends from "./friends/friends";
import AboutMe from "./aboutMe/aboutMe";
import { HomeOutlined, TeamOutlined, CommentOutlined, UserOutlined} from '@ant-design/icons';

require("./game.css");

const Game= ({match}) => {
    return(
        <div className="HolyGrail">
            <header>
                <GameHeader></GameHeader>
            </header>
            <div className={"HolyGrail-body"}>
                <Switch>
                    <Route exact path={`${match.url}`} component={Lobby}/>
                    <Route path={`${match.url}/aboutMe`} component={AboutMe}/>
                    <Route path={`${match.url}/message`} component={Messages}/>
                    <Route path={`${match.url}/friends`} component={Friends}/>
                    <Route path={`${match.url}/lobby`} component={Lobby}/>
                </Switch>
            </div>
        </div>
    )
}

export default Game;
