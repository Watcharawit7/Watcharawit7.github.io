import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
  <Navbar expand="lg" variant="dark" className="fixed-top bg-dark mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/project" className="text-light mx-2">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="text-light mx-2">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default CustomNavbar;
