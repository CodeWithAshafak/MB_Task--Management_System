import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Modal,  Form } from "react-bootstrap";



const AssignTask=()=>{
    const [myData , setMyData]=useState([])  //loadData function ke liye

//...........................Model ke liye//..............................................
    const [show, setShow] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completionDays, setCompletionDays] = useState("");
    const [empid, setEmpid] = useState("");
   
  
    const handleClose = () => setShow(false);
    const handleShow = (empid) =>{
      setEmpid(empid)
        setShow(true); 
     } 
  
    const handleSaveTask =async () => {
    let api="http://localhost:9000/admin/savetask"
    try {
       const response= await axios.post(api , {empid: empid, taskTitle:taskTitle , description:description,completionDays:completionDays }) 
       console.log(response.data)
       alert(response.data.msg)
       setShow(false)
    } catch (error) {
        console.log(error) 
    }
 }
    
    //.................................table....1first............................................................
    const loadData=async()=>{
    let api="http://localhost:9000/admin/assigntaskDisplay"
try {
    const response= await axios.get(api);
    console.log(response.data)
    setMyData(response.data)
} catch (error) {
    console.log(error)
}
}

useEffect(()=>{
    loadData()
},[])

let sno=0;
const ans= myData.map((key)=>{
sno++;
return(
    <>
    <tr align="center">
        <td>{sno}</td>
        <td>{key.empname}</td>
        <td>{key.email}</td>
        <td>{key.designation}</td>
        <td>{key.terms}</td>
        <td>
        <Button variant="success" onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
        </td>
    </tr>
    
    </>
)
})
 
    return(
        <>
        
        <h5> Assign task </h5>
        <Table striped bordered hover>
      <thead>
      <tr align="center">
          <th>S.No</th>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Terms</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>

 {/* //.............................assign task dene ke liye............................................................      */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text"  value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control  as="textarea" rows={3}  value={description} onChange={(e) => setDescription(e.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="completionDays">
              <Form.Label>Completion Days</Form.Label>
              <Form.Control  type="number"  value={completionDays} onChange={(e) => setCompletionDays(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
       <Button variant="success" onClick={handleSaveTask}>Save </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default AssignTask