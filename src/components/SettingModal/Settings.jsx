import React from 'react'
import "./Settings.css";
import { Form, FormControl, FormGroup, FormLabel, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";

//pomofocous timer
function Settings({ setTimes, times, handleSubmit,handleClose }) {

  const { t} = useTranslation();

  const handleChange = (e) => {
    setTimes({ ...times, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <ModalHeader closeButton>
        <h4 className="title">{t("Pomo:TimerSetting")}</h4>
      </ModalHeader>
      <ModalBody>
        <Form className='row'>
          <FormGroup className="col-12 col-sm-6 col-md-6 col-lg-6">
            <FormLabel>{t("Pomo:Pomo")}</FormLabel>
            <FormControl
              type="number"
              className='mb-3'
              autoFocus
              value={times.one}
              name="one"
              onChange={handleChange}

            />
            <FormLabel>{t("Pomo:Short")}</FormLabel>
            <FormControl
              type="number"
              autoFocus
              value={times.three}
              name="three"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-sm-6 col-md-6 col-lg-6">
            <FormLabel>{t("Pomo:Long")}</FormLabel>
            <FormControl
              type="number"
              className='mb-3'
              autoFocus
              value={times.two}
              name="two"
              onChange={handleChange}
            />
            <FormLabel>{t("Pomo:Task")}</FormLabel>
            <FormControl
              type="text"
              placeholder={t("Pomo:TaskName")}
              required
              value={times.task}
              name="task"
              onChange={handleChange}
            />
          </FormGroup>

        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className='mb-2' variant="secondary"onClick={handleClose} >
          {t("Pomo:Cancel")}
        </Button>
        <Button className='mb-2' variant="primary" onClick={handleSubmit}>
          {t("Pomo:Save")}
        </Button>
      </ModalFooter>
    </div>
  )
}

export default Settings