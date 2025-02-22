import "../CSS/Login.css"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[userid, setUserId]=useState("") 
    const[password, setPassword]=useState("")
    const[userType , setUsertype]=useState("")
    //console.log(admin, password, empType)
    const navigate=useNavigate()
 
const handleSubmit=async()=>{
//..........Agar login Admin kare to
if(userType==="admin")
    {
      try {
        let api="http://localhost:9000/admin/adminlogin";
        const response= await axios.post(api , {userid:userid, password:password})
        console.log(response.data.name)
    
        if(response.status==200)
        {
        localStorage.setItem("username", response.data.name)
          localStorage.setItem("userid", response.data.userid)
          toast.success("Login SuccesFully!!!")
          navigate("/admindashboard")
       
        }
      } catch (error) {
        toast.error(error.response.data.msg)
      }
    }

    
   // ...........login Employee kare.............
    else if(userType==="employee")
    {
    try {
      let api="http://localhost:9000/employee/employeelogin";
      const response= await axios.post(api , {userid:userid, password:password})
      console.log(response.data)
      if(response.status===200)
      {
        localStorage.setItem("empname" , response.data.empname)
        localStorage.setItem("empemail", response.data.email)
        localStorage.setItem("empid", response.data._id)
        toast.success("Login SuccesFully!!!")
          navigate("/empdashboard")
      }
     
    } catch (error) {
      toast.error(error.response.data.msg)
    }
    }
    }



  return (
    <>
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign in with</h2>
         <div className="social-icons">
          <button className="icon facebook">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="icon twitter">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>

        <div className="divider">
          <hr />
          <span>Or</span>
          <hr />
        </div>

        
     
          <div className="input-group">
            <input type="text" placeholder="Enter your ID"  name="userid" value={userid} onChange={(e)=>{setUserId(e.target.value)}} />
          </div>
         <div className="input-group">
           <input type="password" placeholder="Enter your password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>

          <div className="input-group">
              <select  required name="empType" value={userType} onChange={(e)=>{setUsertype(e.target.value)}}>
                <option value="" disabled> Login as </option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                 </select>
              </div>

          {/* Login Button */}
          <button className="login-btn" onClick={handleSubmit}>LOGIN</button>
      

      
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default Login;