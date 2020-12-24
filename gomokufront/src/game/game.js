import React from 'react';
import {Router, useLocation} from "react-router";
import {Route,Switch} from "react-router-dom"
import GameHeader from "./gameHeader"
import {Button, Menu} from "antd";
import Lobby from "./gameLobby/gameLobby";
import Messages from "./message/messages";
import Friends from "./friends/friends";
import AboutMe from "./aboutMe/aboutMe";
import { HomeOutlined, TeamOutlined, CommentOutlined, UserOutlined} from '@ant-design/icons';

require("./game.css");

const GameLobby= () => {
    let location = useLocation();
    let id = location.state.username;
    return(
        <div class="HolyGrail">
            <header>

            </header>
            <div className="HolyGrail-body">
                <Router>
                    <Route path="/game/lobby" component={Lobby}/>
                    <Route path="/game/messages" component={Messages}/>
                    <Route path="/game/friends" component={Friends}/>
                    <Route path="/game/aboutMe" component={AboutMe}/>
                </Router>
            </div>
        </div>
    )
}

export default GameLobby;
