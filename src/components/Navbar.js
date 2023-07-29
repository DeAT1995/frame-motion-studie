import { Nav, NavbarBrand } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



function NavbarComponent() {
    return (
     <>
     <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-around">
      <NavbarBrand className="h1 border rounded p-2 text-center text-muted">FRAME MOTION STUDIE</NavbarBrand>
      <Nav className="d-flex justify-content-around">
      <Link to="/Home" className="btn btn-outline-secondary" style={{marginRight: "20px"}}>Home</Link>
      <Link to="/Contact" className="btn btn-outline-secondary">Contact</Link>
      </Nav>
     </Navbar>
    </>
    );
  }
  
  export default NavbarComponent;