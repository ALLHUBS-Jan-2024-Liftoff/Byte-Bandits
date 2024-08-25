// components/NavBar/NavBar.jsx
import { Link } from "react-router-dom";


console.log(authenticated);
export const NavBar = ( authenticated ) => {

  return (
    <Navbar bg="light" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="home">Balanced Bytes</Navbar.Brand>
      {console.log("Navbar", authenticated)}
      {!authenticated ? (
        <>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </>
      ) : (
        <>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/recipes"}>Saved Recipes</Nav.Link>
            <Nav.Link as={Link} to="/search">Find Recipes</Nav.Link>
            <Nav.Link as={Link} to="/MealPlans">Meal Plans</Nav.Link>
            <Nav.Link as={Link} to="/analysis">Analysis</Nav.Link>
            <Nav.Link as={Link} to="/review">Review</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
                <Button onClick={handleLogout} variant="outline-danger">Logout</Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      )}
    </Container>
  </Navbar>
  );
};
