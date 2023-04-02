import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

export default function Login() {
  const router = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password)
        .then((e) => {
          let userUId = e.user.uid
            localStorage.setItem("UserData", userUId);
          router("/");
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="login">

        <div className="logoLogin" >
          <img src="https://pomofocus.io/icons/icon-white.png" alt="valide" />
          <h1 className="logoLoginTitle">Pomofocus</h1>
        </div>
      <div className="containerR">
      <span className="logintitel">{t("Pomo:Login")}</span>
      <div className="divideSignup"></div>    
      <form onSubmit={(e) => handelLogin(e)}>
        <div className="mb-2">
          <label>Email address</label>
        </div>
        <div className="mb-3">
        <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label>Password</label>
        </div>
        <div className="mb-3">
        <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="d-grid mb-5">
          <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!email||!password?true:false}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-3">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
        <h6>If you don't have Account</h6>
       <Link className="link" to="/signup">
        Create an Account
      </Link> 
    </div>
  );
}
