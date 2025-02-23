import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Rightimg from "../images/Right.jpeg"
import worngimg from "../images/wrong.png"
import { message } from "antd";




const UserReport=()=>{
    const [mydata, setMydata]=useState([])

    const loadData=async()=>{
        let api="http://localhost:9000/admin/userreport"
        try {
            const response= await axios.get(api);
            console.log("API Response:", response.data)

            setMydata(response.data)
        } catch (error) {
            console.log(error)
        }
        } 
        useEffect(()=>{
            loadData();
        },[])

const  ReAssignTask=async(taskid)=>{
    let api="http://localhost:9000/admin/reassignreport"
    try {
        const response= await axios.post(api,{taskid:taskid});
       console.log(response.data)
       message.success(response.data.msg)
       loadData()
      
    } catch (error) {
        console.log(error)
    }
}


let sno=0;
const ans= mydata.map((key)=>{
    sno++;
    return(
        <>
      <tr>
        <td>
            {key.empReport=="submited" ? (  <img src={Rightimg} height={30} width={30}/>): ( <img src={worngimg} height={30} width={30}/>)}
           
        </td>
       <td>{sno}</td> 
       <td>{key.empid.empname}</td> 
       <td>{key.empid.designation}</td> 
       <td>{key.empid.email}</td> 
       <td>{key.taskTitle}</td> 
       <td>{key.discription}</td> 
       <td>{key.priority}</td> 

       <td>{key.completionDays}</td> 
       <td>{key.taskstatus}</td> 
       <td>{key.empReport=="submited"?(<span style={{color:"green", fontWeight:"bold"}}>{key.empReport}</span>):(<span style={{color:"red", fontWeight:"bold"}}>{key.empReport}</span>)}
        </td> 
       <td>
       <Button variant="info" size="sm" onClick={()=>{ReAssignTask(key._id)}}> ReAssign</Button>
       </td>
       </tr>  
        
        </>
    )
})
    
    return(
        <>
       <h1> Current Employee Tasks</h1> 
       <Table striped bordered hover  style={{fontSize:"12px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>S.no</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Task Title</th>
          <th>Task Description</th>
          <th>Priority</th>
          <th>Assign Days</th>
          <th>Task Status</th>
          <th>Task Report</th>
          <th>Task ReAssign</th>

        </tr>
      </thead>
      <tbody>
{ans}
      </tbody>
      </Table>

        </>
    )
}
export default UserReport;