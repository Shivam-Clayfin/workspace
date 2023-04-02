import { Link } from "react-router-dom";
import "./reports.css";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Reports() {
  const mainData = JSON.parse(localStorage.getItem("timesData")) || [];
  const removeTodoList = (index) => {
    mainData.splice(index, 1);
    localStorage.setItem("timesData", JSON.stringify(mainData));
  };
  return (
    <div className="containerR">
      <ul className="header">
        <li className="items">
          <Link className="link"  to="/">
            <div className="logo">
              <img
                src="https://pomofocus.io/icons/icon-white.png"
                alt="valide"
              />
              <h3 className="title">Pomofocus</h3>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/reports">
            <div className="item">
              <img src="https://pomofocus.io/icons/graph-white.png" alt="" />
              <div className="itemtext">Report</div>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/">
            <div className="item">
              <img src="https://pomofocus.io/icons/config-white.png" alt="" />
              <div className="itemtext">Setting</div>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/login">
            <div className="item">
              <img src="https://pomofocus.io/icons/user-white.png" alt="" />
              <div>Login</div>
            </div>
          </Link>
        </li>
      </ul>
      <h2 className="taskText"> Previous Tasks</h2>
      {mainData.map((e) => {
        return (
          <>
            {/* <div className="taskList">
              <h4>Task : {e.task}</h4>
            </div>
            <button className="cross" onClick={removeTodoList}>
              dlt
            </button> */}
             <ListGroup className="taskList" as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex mb-6 justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{e.task}</div>
          PomoDoro:{e.one}
          </div>
        <Badge bg="danger" onClick={removeTodoList} >
          Delete
        </Badge>
      </ListGroup.Item>
    </ListGroup>
          </>
        );
      })}
    </div>
  );
}