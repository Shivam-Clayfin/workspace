import React, { useRef, useState, useMemo, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./counter.css";
import { Button, ListGroup, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useTranslation } from "react-i18next";

//pomofocous timer

function Counter({ data, handle }) {
  const { t } = useTranslation();

  const [show, setShow] = useState(true)
  //for pause timer
  const [pause, setPause] = useState(true);
  //for timer start initial state is 25 because we want default is 25 mins
  const [time, setTime] = useState(25);
  //this state is for timer count timerNumber number of counter we are
  const [timerNumber, setTimerNumber] = useState({
    one: 25,
    two: 15,
    three: 5
  });
  const [isDisable, setisDisable] = useState(false);
  // define state for timerNumber counter we are clicked like pomo short or long
  const [clickedBy, setClickedBy] = useState("pomo");
  //use useRef hook for  handling rerendering of timer

  const clockRef = useRef();
  const handleStart = () => {
    clockRef.current.start();
  };
  const handlePause = () => {
    clockRef.current.pause();
  };
  const Pause = () => {
    setPause(!pause);
  };
  // const audio = new Audio(
  //   "https://file-examples.com/storage/fef89aabc36429826928b9c/2017/11/file_example_MP3_700KB.mp3"
  // );

  const arr = JSON.parse(localStorage.getItem("timesData")) || [];
  const removeTodo = (index) => {
    arr.splice(index, 1);
    localStorage.setItem("timesData", JSON.stringify(arr));
  };
  useEffect(() => {
    if (arr.length === 0) {
      setisDisable(true);
    } else {
      setisDisable(false);
    }
  }, [arr]);


  const handleClose = () => {
    setShow(false)
    removeTodo();
    window.location.reload();
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Modal show={show} variant="success">
          <ModalHeader>
            <h4 className="title">{t("Pomo:Pomo")}</h4>
          </ModalHeader>
          <ModalBody>
            <div>{t("Pomo:TimerDone")}</div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleClose()} variant="outline-success">
              {t("Pomo:Okay")}
            </Button>
          </ModalFooter>
        </Modal>
      )
    } else {
      return (
        <span>
          {/* The length you want to pad The default is 2, timerNumber emulates classic padding behavior. */}
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  const Timer = (value) => {
    return (
      <h1 className="counterStyle">
        <Countdown
          date={value}
          ref={clockRef}
          autoStart={false}
          renderer={renderer}
        />
      </h1>
    );
  };
  const handleOne = () => {
    setClickedBy("pomo");
    clockRef.current.stop();
    setTime(timerNumber.one);
    setPause(true);
  };
  const handleTwo = () => {
    setClickedBy("short");
    clockRef.current.stop();
    setTime(timerNumber.three);
    setPause(true);
  };
  const handleThree = () => {
    setClickedBy("long");
    clockRef.current.stop();
    setTime(timerNumber.two);
    setPause(true);
  };
  if (data.one !== timerNumber.one) {
    setTimerNumber({ ...timerNumber, one: data.one });
    {
      clickedBy === "pomo" && setTime(data.one);
    }
  } else if (data.two !== timerNumber.two) {
    setTimerNumber({ ...timerNumber, two: data.two });
    {
      clickedBy === "short" && setTime(data.two);
    }
  } else if (data.three !== timerNumber.three) {
    setTimerNumber({ ...timerNumber, three: data.three });
    {
      clickedBy === "long" && setTime(data.three);
    }
  }
  handle(clickedBy);
  const date = useMemo(() => {
    return Date.now() + 60000 * time;
  }, [time]);



  const Style = { backgroundColor: "rgba(0, 0, 0, 0.15)" };
  const footer = () => {
    if (clickedBy === "pomo") {
      return (t("Pomo:TimeToWork"));
    } else if (clickedBy === "short") {
      return (t("Pomo:TimeForBreak"))
    } else {
      return (t("Pomo:TimeForLongBreak"))
    }
  };

  return (
    <>
      <div className="counter">
        <div className="items">
          <div
            className="itemText"
            style={clickedBy === "pomo" ? Style : null}
            onClick={handleOne}>
            {t("Pomo:Pomo")}
          </div>
          <div
            className="itemText"
            style={clickedBy === "short" ? Style : null}
            onClick={handleTwo}>
            {t("Pomo:ShortBreak")}
          </div>
          <div
            className="itemText"
            style={clickedBy === "long" ? Style : null}
            onClick={handleThree}>
            {t("Pomo:LongBreak")}
          </div>
        </div>
        {Timer(date)}
        {pause ? (
          <button
            className="button"
            disabled={isDisable}
            onClick={() => {
              handleStart();
              Pause();
            }}>
            {t("Pomo:Start")}
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              handlePause();
              Pause();
            }}>
            {t("Pomo:Pause")}
          </button>
        )}
      </div>
      <div className="footer">{footer()}</div>
      <div className="taskOut">
        <ListGroup numbered>
          {arr.map((e) => {
            return (
              <ListGroup.Item
                as="li"
                className="d-flex mt-6 justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold" >{e.task}</div>
                </div>

              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
}

export default Counter;
