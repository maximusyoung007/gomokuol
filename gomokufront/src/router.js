import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./login/loginPage"
import Game from "./game/game";
import Lobby from "./game/gameLobby/gameLobby"
import Messages from "./game/message/messages";
import Friends from "./game/friends/friends";
import AboutMe from "./game/aboutMe/aboutMe";

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/game/" component={Game}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRoute
