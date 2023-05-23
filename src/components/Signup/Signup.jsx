import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useTranslation } from "react-i18next";


//pomofocous
export default function Signup() {
  const navigation = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handelSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        navigation("/login")
      )
      updateProfile(auth.currentUser, { displayName: name })
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("user Already There");
      console.log("error", error.code);
    }
  };

  return (
    <div className="signup">
      <div className="logoLogin"onClick={()=>navigation("/")}  >
        <img src="https://pomofocus.io/icons/icon-white.png" alt="valide" />
        <h1 className="logoLoginTitle">{t("Pomo:Pomo")}</h1>
      </div>
      <div className="containerR">
        <span className="signuptitel">{t("Pomo:CreateAcc")}</span> 
        <div className="divideSignup"></div>    
         <form onSubmit={()=>handelSignup()}>
          <div className="mb-2">
            <label>{t("Pomo:UserName")}</label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t("Pomo:EnterUserName")}
              onChange={(e) => setName(e.target.value)}

            />
          </div>
          <div className="mb-2">
          <label>{t("Pomo:EmailAdress")}</label>
        </div>
        <div className="mb-3">
        <input
            type="email"
            className="form-control"
            placeholder={t("Pomo:EnterEmail")}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="mb-2">
            <label>{t("Pomo:CreatePassword")}</label>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder={t("Pomo:CreatePassword")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid mb-5">
            <button
             type="submit" 
             className="btn btn-primary"
             disabled={!email||!password?true:false}
             >
              {t("Pomo:Submit")}
            </button>
          </div>
           
        </form>
      </div>
      {/* <form className="signupForm" onSubmit={handelSignup}>
        <lable>Username</lable>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter Your Username..."
          onChange={(e) => setName(e.target.value)}
        />
        <lable>Email</lable>
        <input
          className="signupInput"
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <lable>Password</lable>
        <input
          className="signupInput"
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signupButton" type="submit">
          Signup
        </button>
      </form> */}
              <h6>{t("Pomo:IfYouHaveAcc")}</h6>
      <Link className="link" to="/login">
       {t("Pomo:LoginWithPassword")}
      </Link>
    </div>
  );
}