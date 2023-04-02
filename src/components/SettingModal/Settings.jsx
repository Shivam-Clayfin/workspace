import React from 'react'
import "./Settings.css";
import { Form, FormControl, FormGroup, FormLabel, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


function Settings({ setTimes, times, handleSubmit,handleClose }) {
  const handleChange = (e) => {
    setTimes({ ...times, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <ModalHeader closeButton>
        <h4 className="title">TIMER SETTING</h4>
      </ModalHeader>
      <ModalBody>
        <Form className='row'>
          <FormGroup className="col-12 col-sm-6 col-md-6 col-lg-6">
            <FormLabel>Pomodoro</FormLabel>
            <FormControl
              type="number"
              className='mb-3'
              autoFocus
              value={times.one}
              name="one"
              onChange={handleChange}

            />
            <FormLabel>Short</FormLabel>
            <FormControl
              type="number"
              autoFocus
              value={times.three}
              name="three"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-sm-6 col-md-6 col-lg-6">
            <FormLabel>Long</FormLabel>
            <FormControl
              type="number"
              className='mb-3'
              autoFocus
              value={times.two}
              name="two"
              onChange={handleChange}
            />
            <FormLabel>Task</FormLabel>
            <FormControl
              type="text"
              placeholder="Task Name"
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
          Cancle
        </Button>
        <Button className='mb-2' variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </ModalFooter>
    </div>
  )
}

export default Settings