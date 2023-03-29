import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="logintitel">Login</span>
      <form className="loginForm">
        <lable>Username</lable>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Your Username..."
        />
        <lable>Password</lable>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Your Password..."
        />
        <button className="loginButton">Login</button>
      </form>

      <Link className="link" to="/signup">
        <h6>If you don't have Account</h6>
        <button className="register">signup</button>
      </Link>
    </div>
  );
}
