import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




const TopNavbar=()=>{
    return(
        <>

      <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand href="#">Task Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>






        </>
    )
}
export default TopNavbar