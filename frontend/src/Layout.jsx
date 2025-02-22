import Header from "./Component/Header";
import Container from 'react-bootstrap/Container';
import TopNavbar from "./Component/TopNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

const Layout=()=>{
    return(
        <>
         <Container fluid>
            <div style={{position:"sticky", top:"0", zIndex:"10" }}>
      <Header/> 
      <TopNavbar/> 
      </div>
      <Outlet/>
      <Footer/>
      </Container>   
        </>
    )
}
export default Layout;