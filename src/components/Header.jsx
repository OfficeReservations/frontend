import logoBookingBlue from "../assets/logoBookingBlue.svg"
import { FaUser } from "react-icons/fa";
import '../css/Header.css'
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const hideLogout = location.pathname === "/signUp" || location.pathname === "/login";
    return (
        <header  className="nav-header px-0 p-1 position-fixed w-100 h-auto " >
          <Container className="d-flex justify-content-between px-0">
            <Navbar.Brand href="/" className="ms-0">
              <img src={logoBookingBlue} alt="RUT_logo" className="logo-img" />
            </Navbar.Brand>
            
            <Nav>
              <Nav.Link as={Link} to="/profile" > 
                <FaUser size={30} className="icon-user p-0" />
              </Nav.Link>
              {!hideLogout && (
                <Nav.Link as={Link} to="/login" > 
                <IoMdExit size={30} className="icon-user p-0" />
              </Nav.Link>
              )}
              
            </Nav>
          </Container>
        </header>
      );
}