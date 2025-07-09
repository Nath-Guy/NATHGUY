import React from "react";
import { Container, Navbar as Nvb, Nav } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";

const Navbar: React.FC = () => {

  return (
      <Nvb bg="dark" data-bs-theme="dark">
        <Container>
          <Nvb.Brand href="#home">Home</Nvb.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Thumbnail</Nav.Link>
            <Nav.Link href="#features">New</Nav.Link>
            <Nav.Link href="#pricing">Edit</Nav.Link>
          </Nav>
        </Container>
      </Nvb>
  );
};

export default Navbar;
