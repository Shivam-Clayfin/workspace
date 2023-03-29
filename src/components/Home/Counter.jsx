import React, { useRef, useState, useMemo, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./counter.css";
import { useNavigate } from "react-router-dom";

function Counter({ data, handle }) {
  let history = useNavigate();
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

  const audio = new Audio(
    "http://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.05.mp3"
  );

  const refreshPage = () => {
    window.location.reload();
  };

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

  console.log("out" + arr.length);
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      audio.play();
      alert("timer over");
      removeTodo();
      history("/reports");
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
      <h1>
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
  var Stylee = null;
  if (clickedBy === "pomo") {
    Stylee = { color: "#468e91" };
  } else if (clickedBy === "short") {
    Stylee = { color: "#468e91" };
  } else {
    Stylee = { color: "#437ea8" };
  }
  const footer = () => {
    if (clickedBy === "pomo") {
      return "Time to Work !";
    } else if (clickedBy === "short") {
      return "Time for a Break";
    } else {
      return "Time for a Long Break";
    }
  };

  return (
    <>
      <div className="counter">
        <div className="item">
          <div
            className="itemText"
            style={clickedBy === "pomo" ? Style : null}
            onClick={handleOne}>
            Pomodoro
          </div>
          <div
            className="itemText"
            style={clickedBy === "short" ? Style : null}
            onClick={handleTwo}>
            Short Break
          </div>
          <div
            className="itemText"
            style={clickedBy === "long" ? Style : null}
            onClick={handleThree}>
            Long Break
          </div>
        </div>
        {Timer(date)}
        {pause ? (
          <Button
            disabled={isDisable}
            style={Stylee}
            onClick={() => {
              handleStart();
              Pause();
            }}>
            START
          </Button>
        ) : (
          <Button
            style={Stylee}
            onClick={() => {
              handlePause();
              Pause();
            }}>
            STOP
          </Button>
        )}
      </div>

      <div className="taskOut">
        {arr.map((e) => {
          return (
            <div className="footerInput">
              <h4>Task : {e.task}</h4>
            </div>
          );
        })}
      </div>
      <div className="footer">{footer()}</div>
    </>
  );
}

export default Counter;
