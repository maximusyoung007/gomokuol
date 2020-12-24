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
            <Route exact path="/game/" component={Game}/>
            {/*<Redirect to="/game/lobby" component={Messages}/>*/}
            <Route path="/game/lobby" component={Lobby}/>
            <Route path="/game/messages" component={Messages}/>
            <Route path="/game/friends" component={Friends}/>
            <Route path="/game/aboutMe" component={AboutMe}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRoute
