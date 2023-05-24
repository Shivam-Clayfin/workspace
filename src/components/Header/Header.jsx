import React, { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import Settings from "../SettingModal/Settings";
import { Modal } from "react-bootstrap";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

//pomofocous


function Header({ handleCallBack }) {


  const navigation = useNavigate()
  const { t} = useTranslation();

  const [show, setShow] = useState(false);
  const [times, setTimes] = useState({
    one: 25,
    two: 15,
    three: 5,
    task: []
  });
  //console.log(times);
  const handleSetting = () => {
    setShow((prevValue) => !prevValue);
  };

  const handleClose = () => setShow(false);

  const onTrigger = () => {
    handleCallBack(times);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    onTrigger();
    const arr = JSON.parse(localStorage.getItem("timesData")) || [];
    arr.push(times);
    localStorage.setItem("timesData", JSON.stringify(arr));
  };
  const res = localStorage.getItem("UserData");

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      navigation("/login")
    }).catch((error) => {
      console.log("first", error)
    });
  }
  const onChangeLang = () => {

    let changeLang = "en"

    if (lang === "en") {
      changeLang = "hn"
    }
    i18n.changeLanguage(changeLang);
    setLang(changeLang)

  }

  // const changeCSS = (lng, cssLinkIndex) => {

  //   if (lng === "en") {
  //     // console.log('lng..en', lng)``

  //     let ensheet = document.getElementById("style-direction");
  //     ensheet.removeAttribute("disabled");
  //     let oldsheet = document.getElementById("style-direction-ltr");
  //     oldsheet.disabled = true
  //   } else if (lng === "ar") {
  //     // console.log('lng..ar', lng)
  //     let ensheet = document.getElementById("style-direction-ltr");
  //     ensheet.removeAttribute("disabled");
  //     let oldsheet = document.getElementById("style-direction");
  //     oldsheet.disabled = true;
  //   }
  // }

  const [lang, setLang] = useState("en")

  return (
    <>
      <ul className="header">
        <li className="items">
          <Link className="link" to="/">
            <div className="logo" >
              <img src="https://pomofocus.io/icons/icon-white.png" alt="valide" />
              <h3 className="title">{t("Pomo:Pomo")}</h3>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/reports">
            <div className="item">
              <img src="https://pomofocus.io/icons/graph-white.png" alt="" />
              <div className="itemtext">{t("Pomo:Reports")}</div>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/">
            <div className="item" onClick={handleSetting}>
              <img src="https://pomofocus.io/icons/config-white.png" alt="" />
              <div className="itemtext">{t("Pomo:Settings")}</div>
            </div>
          </Link>
        </li>
        <li className="items">

          {res ? <Link className="link" onClick={handleLogout} to="/">
            <div className="item">
              <img src="https://pomofocus.io/icons/icon-white.png" alt="" />
              <div>{t("Pomo:Logout")}</div>
            </div>
          </Link> :
            <Link className="link" to="/login">
              <div className="item">
                <img src="https://pomofocus.io/icons/user-white.png" alt="" />
                <div>{t("Pomo:Login")}</div>
              </div>
            </Link>
          }
        </li>
        <li className="items">
          <Link className="link" to="/">
            <div className="item" onClick={onChangeLang}>
              <img src="https://cdn-icons-png.flaticon.com/128/4459/4459205.png" alt="" />
              <div className="itemtext">{t("Pomo:Language")}</div>
            </div>
          </Link>
        </li>
    
      </ul>

      {/* <div className="divider"></div> */}
      <Modal size="lg"
        show={show} onHide={handleSetting} >
        <Settings
          setShow={setShow}
          times={times}
          setTimes={setTimes}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      </Modal>
      {/* {show && (
        <div className="container">
          <div className="head">
            <h4>TIMER SETTING</h4>
            <div onClick={handleSetting} className="remove">
            </div>
          </div>
          <div className="time">
            <h4>Time (minutes)</h4>
            <div className="pomo">
              <div className="pomoD">
                <h5>Pomodoro</h5>
                <input
                  value={times.one}
                  type="number"
                  name="one"
                  onChange={handleChange}
                />
              </div>
              <div className="pomoD">
                <h5>Short</h5>
                <input
                  value={times.three}
                  type="number"
                  name="three"
                  onChange={handleChange}
                />
              </div>
              <div className="pomoD">
                <h5>Long</h5>
                <input
                  value={times.two}
                  type="number"
                  name="two"
                  onChange={handleChange}
                />
                <h5>task</h5>
                <input
                  value={times.task}
                  type="text"
                  name="task"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="fotter">
            <button className="btnOk" onClick={handleSubmit}>
              OK
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Header;
