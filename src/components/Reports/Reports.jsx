import "./reports.css";
import Badge from 'react-bootstrap/Badge';
import Header from "../Header/Header";
import { Accordion } from "react-bootstrap";
import { t } from "i18next";
//pomofocous
export default function Reports() {

  const mainData = JSON.parse(localStorage.getItem("timesData")) || [];

  const removeTodoList = (index) => {
    mainData.splice(index, 1);
    localStorage.setItem("timesData", JSON.stringify(mainData));
    window.location.reload();

  };


  return (
    <div className="containerReport">
      <Header />
      <h2 className="taskText">{t("Pomo:PreviousTask")} </h2>
      <div className="taskList">
      {mainData.map((e) => {
        return (
      <Accordion defaultActiveKey="0">
      <Accordion.Item >
        <Accordion.Header><h3>{e.task}</h3></Accordion.Header>
        <Accordion.Body>
            <div className="d-flex mb-6 justify-content-between align-items-start" >
                <div className="text-danger">{t("Pomo:Pomo")} : {e.one}</div>
                <div className="text-info"> {t("Pomo:Short")} : {e.three}</div>
                <div className="text-primary">  {t("Pomo:Long")} : {e.two}</div>
                <Badge bg="danger" onClick={removeTodoList} >
                  {t("Pomo:Delete")}
                </Badge>
                </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        );
      })}
      </div>
    </div>
  );
}