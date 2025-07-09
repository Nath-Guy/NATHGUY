import React from "react";
import { Container, Navbar as Nvb, Nav } from "react-bootstrap";

const Navbar: React.FC = () => {

  return (
      <Nvb bg="dark" data-bs-theme="dark">
        <Container>
          <Nvb.Brand href="#home">Navbar</Nvb.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Nvb>
  );
};

export default Navbar;
