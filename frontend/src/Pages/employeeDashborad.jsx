import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "../CSS/employeedashboard.css"
import {Link , Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { GrDashboard } from "react-icons/gr";
import { FaUsersGear } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";

import { GrUserAdmin } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";



const EmpDashboard=()=> {
const[empName, setEmpname]=useState("")
const[empEmail , setEmpemail]=useState("")
const navigate=useNavigate()

useEffect(()=>{
setEmpname(localStorage.getItem("empname"))
setEmpemail(localStorage.getItem("empemail"))

},[])


  return (
    <>
   
    <div className="app-container">
     
      <Navbar id='top' bg="Dark" variant="dark" expand="lg" fixed="top">

        <Navbar.Brand href="#"  ><GrUserAdmin />  Employee Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" >
          <Nav.Link id='logout' href="#" onClick={()=>{navigate("/login")}}> <IoMdLogOut /> Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="sidebarE">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="#"><GrDashboard/> Dashboard</Nav.Link>

              <Nav.Link as={Link} to="displayemployee"><FaUsersGear/> Employee Task</Nav.Link>


              <Nav.Link as={Link} to="assign task"><TbFileReport/>Admin Contact</Nav.Link>
            
            </Nav>
          </Col> 

        
       

          {/* Main Content */}
          <Col id='main' md={10} className="content">
            <div className="content-area">

              <h1 id='empname'>Welcome : {empName}</h1>


               <h4>{empName} , you have to submit following task</h4>

              <p align="center" style={{color:" #6b4b3a"}}> <br/>
              Email : {empEmail} <Link to="reset">Reset-password</Link>               
             </p>
              <div className="scrollable-content">
             
                <Outlet/>
          </div>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    
    </>
  );
}

export default EmpDashboard;