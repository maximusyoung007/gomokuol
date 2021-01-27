import React,{useState} from 'react';
import { Route, Switch } from "react-router-dom"
import GameHeader from "./gameHeader"
import Lobby from "./gameLobby/gameLobby";
import Messages from "./message/messages";
import Friends from "./friends/friends";
import AboutMe from "./aboutMe/aboutMe";
import Play from "./play/play";

require("./game.css");

const Game= ({match}) => {
    return(
        <div className="HolyGrail">
            <header>
                <GameHeader></GameHeader>
            </header>
            <div className={"HolyGrail-content"}>
                <Switch>
                    <Route exact path={`${match.url}`} component={Lobby}/>
                    <Route path={`${match.url}/aboutMe`} component={AboutMe}/>
                    <Route path={`${match.url}/message`} component={Messages}/>
                    <Route path={`${match.url}/friends`} component={Friends}/>
                    <Route path={`${match.url}/lobby`} component={Lobby}/>
                    <Route path={`${match.url}/play`} component={Play}/>
                </Switch>
            </div>
        </div>
    )
}

export default Game;
