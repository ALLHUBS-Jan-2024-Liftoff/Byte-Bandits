import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth } from "../../context/AuthContext";

export const BsNavBar = () => {

const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Balanced Bytes</Navbar.Brand>
          {!user ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="me-auto">
                <Nav.Link href="/recipes">Saved Recipes</Nav.Link>
                <Nav.Link href="/search">Find Recipes</Nav.Link>
                <Nav.Link href="#meals">Meal Plans</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}