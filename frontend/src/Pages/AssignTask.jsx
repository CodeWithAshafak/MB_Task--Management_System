import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Modal,  Form } from "react-bootstrap";
import { MdAutoDelete } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AssignTask=()=>{

    const navigate = useNavigate()
    const [myData , setMyData]=useState([])  //loadData function ke liye
   

//...........................Model ke liye//..............................................
    const [show, setShow] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completionDays, setCompletionDays] = useState("");
    const[ priority , setPriority ] = useState("Medium")
    const [empid, setEmpid] = useState("");
   
  
    const handleClose = () => setShow(false);
   


    const handleShow = (empid) =>{
      console.log(empid);
      
      
      setEmpid(empid)
        setShow(true); 
     } 
  
    const handleSaveTask =async () => {
      
      
    let api="http://localhost:9000/admin/savetask"
    try {
       const response= await axios.post(api , {empid: empid, taskTitle:taskTitle , description:description,completionDays:completionDays , priority:priority }) 
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
    // console.log(response.data);
    
    setMyData(response.data)
} catch (error) {
    console.log(error)
}
}

useEffect(()=>{
    loadData()
},[])
const myDel = async(id)=>{
  alert(id)
 

  let api=`http://localhost:9000/admin/empdelete/?empid=${id}`
  const res = await axios.get(api);
  console.log(res.data)
  alert(res.data)
 loadData()
}

//*********myEdit */
const myEdit=(id)=>{
navigate(`/admindashboard/empedit/${id}`)
}
 
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
        {/* <td>{key.terms}</td> */}
        <td>
        <Button variant="success" onClick={()=>{handleShow(key._id)}}>Assign Task</Button>
        </td>
        <td>
        <MdAutoDelete style={{fontSize:"25px", color:"red", cursor:"pointer"}}onClick={()=>{myDel(key._id)}} />
        </td>

        <td>


        <FaRegEdit style={{cursor:"pointer", fontSize:"24px"}} onClick={()=>{myEdit(key._id)}} />
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
          {/* <th>Terms</th> */}
          <th>Action</th>
          <th>Delete</th>
          <th>Edit</th>
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

            <Form.Group className="mb-3" controlId="priority">
              <Form.Label>Priority</Form.Label>

              <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
               </Form.Select>
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