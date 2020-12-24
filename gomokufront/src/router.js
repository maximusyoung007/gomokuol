import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import LoginPage from "./login/loginPage"
import GameLobby from "./gameLobby/gameLobby";

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/gameLobby" component={GameLobby}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRoute
