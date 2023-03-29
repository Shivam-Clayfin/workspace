import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./signup.css";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("jhsh");
    createUserWithEmailAndPassword(auth, email, password)
      .then((snap) => {
        console.log(snap);
      })
      .catch((e) => {
        console.log(e.code);
      });
  };

  console.log(username);
  return (
    <div className="signup">
      <span className="signuptitel">Signup</span>
      <form className="signupForm" onSubmit={(e) => handleSubmit(e)}>
        <lable>Username</lable>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter Your Username..."
          onChange={(e) => setUsername(e.target.value)}
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
      </form>
      <Link className="link" to="/login">
        <h6>If you have existing account</h6>
        <button className="signupLogin">Login</button>
      </Link>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something Went Wrong
        </span>
      )}
    </div>
  );
}
