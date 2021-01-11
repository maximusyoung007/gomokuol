import React from "react";
import RegisterForm from "./registerForm"

require("../login/loginPage.css")

const RegisterPage = () => (
  <div id={"loginBox"} className={"box"}>
    <div className={"loginCard"}>
      <RegisterForm></RegisterForm>
    </div>
  </div>
);

export default RegisterPage
