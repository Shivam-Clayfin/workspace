import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./signup.css";


//pomofocous
export default function Signup() {
  const navigation = useNavigate();
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
      <div className="logoLogin" >
        <img src="https://pomofocus.io/icons/icon-white.png" alt="valide" />
        <h1 className="logoLoginTitle">Pomofocus</h1>
      </div>
      <div className="containerR">
        <span className="signuptitel">Create An Account</span> 
        <div className="divideSignup"></div>    
         <form onSubmit={()=>handelSignup()}>
          <div className="mb-2">
            <label>User Name</label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              onChange={(e) => setName(e.target.value)}

            />
          </div>
          <div className="mb-2">
          <label>Email address</label>
        </div>
        <div className="mb-3">
        <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="mb-2">
            <label>Create Password</label>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
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
              <h6>If you have existing account</h6>
      <Link className="link" to="/login">
       Login With Password
      </Link>
    </div>
  );
}