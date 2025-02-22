import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "../CSS/employeedashboard.css"
import {Link , Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { GrDashboard } from "react-icons/gr";
import { FaUsersGear } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";

import { GrUserAdmin } from "react-icons/gr";




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
      {/* Top Navbar */}
      <Navbar bg="Dark" variant="dark" expand="lg" fixed="top" style={{backgroundColor:"#008070"}}>
        <Navbar.Brand href="#" style={{marginLeft:"700px"}} ><GrUserAdmin />  Employee Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto" style={{marginLeft:"350px"}}>
          <Nav.Link href="#" onClick={()=>{navigate("/login")}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="sidebarE">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="#"><GrDashboard/> Dashboard</Nav.Link>
              <Nav.Link as={Link} to="displayemployee"><FaUsersGear/>  Display Employee</Nav.Link>
              <Nav.Link as={Link} to="assign task"><TbFileReport/>    Assign Task</Nav.Link>
            
            </Nav>
          </Col> 

        
       

          {/* Main Content */}
          <Col md={10} className="content">
            <div className="content-area">
              <p align="center" style={{color:" #6b4b3a"}}>Welcome to the {empName} <br/>
              Email : {empEmail} <Link to="reset">Reset-password</Link>               
             </p>
              {/* Example scrollable content */}
             
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