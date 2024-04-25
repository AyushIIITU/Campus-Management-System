import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer/>

      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container> */}
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {/* <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Home;
