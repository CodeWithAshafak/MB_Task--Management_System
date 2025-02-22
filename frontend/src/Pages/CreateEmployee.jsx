import { useState } from "react";
import "../CSS/CreateEmployee.css"
import img from "../images/dwar.webp"
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const CreateEmployee=()=>{
    const[input, setInput]=useState({})

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}))
    console.log(input)
}

const handleSubmit=async()=>{
try {
    let api="http://localhost:9000/admin/createuser"
const response = await axios.post(api,input)
console.log(response.data)
toast.success("User succesfully created!!");

} catch (error) {
    console.log(error)
}
}

    return(
        <>
      
       <div className="signup-container" >
      <div className="signup-form">
        <h1>Create Employee Data</h1>
          <div className="form-group">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="Employee Name" required name="empname"  onChange={handleInput}/>
          </div>
          <div className="form-group">
          <Form.Select aria-label="Default select example" name="designation"  onChange={handleInput}>
            <option>Designation</option >
           <option value="Frontend">Frontent</option>
           <option value="backend">Backend</option>
          <option value="desginer">Desginer</option>
          <option value="database">DataBase Desgin</option>
          <option value="team leader">Team Leader</option>
          <option value="project manager">Project Manager</option>
        </Form.Select>
</div>
          <div className="form-group">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder=" Email" required  name="email"  onChange={handleInput} />
          </div>
         
          <div className="form-checkbox">
            <input type="checkbox" id="terms" required  name="terms"  onChange={handleInput}/>
            <label htmlFor="terms">
              I agree all statements in <a href="/">Terms of service</a>
            </label>
          </div>
          <button  className="btn-register" onClick={handleSubmit}>Register</button>
      </div>
      <div className="signup-image">
        <img
          src={img}  alt="Illustration"/>
      </div>
    </div>
    <ToastContainer/>
        </>
    )
}
export default CreateEmployee;