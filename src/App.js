import React, { useState } from "react";

import Counter from "./components/Home/Counter";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState({
    one: 25,
    two: 15,
    three: 1 / 6,
    task: []
  });
  const [Clicked, setClicked] = useState("pomo");

  const handle = (data) => {
    setClicked(data);
  };
  const handleCallBack = (item) => {
    setData({ ...item, item });
  };

  var Style = null;
  if (Clicked === "pomo") {
    Style = { backgroundColor: "rgb(217, 85, 80)" };
  } else if (Clicked === "short") {
    Style = { backgroundColor: "rgb(76, 145, 149)" };
  } else if (Clicked === "long") {
    Style = { backgroundColor: "rgb(69, 124, 163)" };
  }
  return (
    <div style={Style}>
      <Header handleCallBack={handleCallBack} />
      <div className="divider"></div>
      <Counter data={data} handle={handle} />
    </div>
  );
}
// pomo
export default App;
