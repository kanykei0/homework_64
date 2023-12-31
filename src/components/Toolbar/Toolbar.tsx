import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Blog
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink to="/" className="nav-link mx-3">
            Home
          </NavLink>
          <NavLink to="/new-post" className="nav-link mx-3">
            Add article
          </NavLink>
          <NavLink to="/about" className="nav-link mx-3">
            About
          </NavLink>
          <NavLink to="/contacts" className="nav-link mx-3">
            Contacts
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
