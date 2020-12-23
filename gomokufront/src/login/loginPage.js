import React from 'react';
import LoginForm from './loginForm'
require("./loginPage.css")

const loginPage = () => (
    <div id={"loginBox"} className={"box"}>
        <div className={"loginCard"}>
            <LoginForm></LoginForm>
        </div>
    </div>
);

export default loginPage
