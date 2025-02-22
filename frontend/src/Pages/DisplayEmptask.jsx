import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {message} from "antd"



const DisplayUserTask=()=>{
    const empid=localStorage.getItem("empid")
    const[myData, setMydata]=useState([]);
    const[taskStatus, setTaskStatus]=useState("")

    const loadData=async()=>{
try {
    let api="http://localhost:9000/employee/empdisplaytask"
    const response= await axios.post(api , {empid:empid})
    setMydata(response.data)
    console.log(response.data)

} catch (error) {
    console.log(error)
}
 }

 useEffect(()=>{
    loadData();
 },[])

 const taskSubmit=async(taskid)=>{
    try {
        let api="http://localhost:9000/employee/emptasksubmit"  
        const response= await axios.post(api, {taskid:taskid, taskStatus:taskStatus})
        console.log(response.data)
        message.success(response.data.msg)
        loadData()
    } catch (error) {
        console.log(error)
    }
 }


let sno=0;
const ans=myData.map((key)=>{
    sno++;
    return(
        <>
       <tr>
       <td>{sno}</td>
       <td>{key.taskTitle}</td>
       <td>{key.discription}</td>
       <td>{key.completionDays}</td>
       <td>
        <Form.Select size="sm" name="taskStatus" value={taskStatus} onChange={(e)=>{setTaskStatus(e.target.value)}} style={{backgroundColor:"rgb(71, 247, 226)"}} >
            <option >Select </option>
            <option value="No Completed">No Completed </option>
            <option value="Full Completed">Full Completed </option>
            <option value="Partial Completed">Partial Completed </option>
      
      </Form.Select></td>
       <td> 
       {key.empReport=="submited"? ( <Button variant="info" disabled>Submited</Button>) : ( <Button variant="warning" onClick={()=>{taskSubmit(key._id)}}>Send</Button>)}
        </td>
       
      
        </tr> 
        </>
    )
})
 

    
    return(
        <>
        <center>
        <h4 style={{color:" #008070"}}> Display User Task</h4>
        <Table striped bordered hover size="sm" >
      <thead >
        <tr >
          <th style={{color:"rgb(182, 73, 23)"}}>S.No</th>
          <th style={{color:"rgb(182, 73, 23)"}}>Task Title</th>
          <th style={{color:"rgb(182, 73, 23)"}}>Discription</th>
          <th style={{color:"rgb(182, 73, 23)"}}>Total Days</th>
          <th style={{color:"rgb(182, 73, 23)"}}> Task Status </th>
          <th style={{color:"rgb(182, 73, 23)"}}>Send Report</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </center>

        </>
    )
}
export default DisplayUserTask