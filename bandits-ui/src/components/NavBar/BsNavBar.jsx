import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

console.log(authenticated);
export const BsNavBar = ( authenticated ) => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Balanced Bytes</Navbar.Brand>
          {!authenticated ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="me-auto">
                <Nav.Link href="recipes">Saved Recipes</Nav.Link>
                <Nav.Link href="/search">Find Recipes</Nav.Link>
                <Nav.Link href="#pricing">Meal Plans</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Button href="/logout" variant="outline-danger">Logout</Button>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}