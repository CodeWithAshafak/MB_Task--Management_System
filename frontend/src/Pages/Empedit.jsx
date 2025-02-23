import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Modal,  Form } from "react-bootstrap";
import axios from 'axios';


const Empedit = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

 
  const [input, setInput] = useState({
    empname: "",
    designation: "",
    email: ""
  });

  
  const loadData = async () => {
    let api = "http://localhost:9000/admin/taskeditdisplay";
    const response = await axios.post(api, { id });
    console.log(response.data);
    
    setInput(response.data); 
  };

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(input);
    
  };

 
  const saveChange = async () => {
    // console.log( input);
    
try {
  let api = "http://localhost:9000/admin/taskeditsave";
    const responce = await axios.post(api ,input)
    console.log(responce.data);
    navigate("/admindashboard/assign task")
  
} catch (error) {
  console.log(error);
  
  
}

    
     
    
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" name='empname' value={input.empname} onChange={inputHandle} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" name='designation' value={input.designation} onChange={inputHandle} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="completionDays">
              <Form.Label>Edit Email</Form.Label>
              <Form.Control type="email" name='email' value={input.email} onChange={inputHandle} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={saveChange}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Empedit;
