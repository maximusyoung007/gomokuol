import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./login/loginPage"
import RegisterPage from "./register/registerPage";
import Game from "./game/game";


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/game/" component={Game}/>
            <Route path="/register" component={RegisterPage}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRoute
