import React, { useState } from "react";
import "./reports.css";

export default function Reports() {
  const [flag, setFlag] = useState(false);
  const arr2 = JSON.parse(localStorage.getItem("timesData2")) || [];
  const removeTodo = (index) => {
    arr2.splice(index, 1);
    localStorage.setItem("timesData2", JSON.stringify(arr2));
    setFlag(true);
  };
  return (
    <div>
      {arr2.map((e) => {
        return (
          <>
            <div className="footerInput">
              <h4>Task : {e.task}</h4>
            </div>
            <button onClick={removeTodo}> dlt</button>
          </>
        );
      })}
    </div>
  );
}
