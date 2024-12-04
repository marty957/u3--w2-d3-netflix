import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import "../App.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <Image src="../src/assets/logo.png" width={150} height={65} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <NavLink className="fs-5 fw-bold nav-link" to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="fs-5 fw-bold nav-link" to="/tv-shows">
              TV Shows
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="fs-5 fw-bold nav-link" to="#home">
              Movies
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="fs-5 fw-bold nav-link" to="#home">
              Recently Added
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="fs-5 fw-bold nav-link" to="#home">
              My List
            </NavLink>
          </Nav.Item>
        </Nav>

        <Nav className="aling-items-center">
          <Nav.Item className="m-auto">
            <Search className="icons" />
          </Nav.Item>
          <Nav.Item className="m-auto">
            <Nav.Link className="fs-5 fw-bold active">KIDS</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-auto">
            <Bell className="bi bi-search icons" />
          </Nav.Item>
          <Nav.Item className="m-auto">
            <PersonCircle className="bi bi-search icons" />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
