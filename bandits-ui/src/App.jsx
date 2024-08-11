import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import LoginPage from "./components/User/LoginPage";
import RegistrationPage from "./components/User/RegistrationPage";
import Logout from "./components/User/Logout";
import { RecipePage } from "./components/Recipes/RecipePage";
import { NewRecipeForm } from "./components/Recipes/NewRecipeForm";
import { SearchPage } from "./components/Search/SearchPage";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


// console.log(authenticated);
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Balanced Bytes</Navbar.Brand>
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
                <Nav.Link as={Link} to="/recipes">Saved Recipes</Nav.Link>
                <Nav.Link as={Link} to="/search">Find Recipes</Nav.Link>
                <Nav.Link as={Link} to="#MealPlans">Meal Plans</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Button href="/logout" variant="outline-danger">Logout</Button>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
      <div className="App">
        <header className="App-header">
          <Routes>
            {console.log("Routes", authenticated)}
            <Route
              path="/login"
              element={<LoginPage setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/register"
              element={<RegistrationPage />}
            />

            {/* Private Routes */}
            {authenticated ? (
              <>
                {console.log("Routes Bool", authenticated)}
                <Route
                  path="/recipes"
                  element={<RecipePage />}
                />
                <Route
                  path="/search"
                  element={<SearchPage />}
                />
                <Route
                  path="/logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
                />
              </>
            ) : (
                <Route
                  path="*"
                  element={<Navigate to="/login" replace />}
                />              
            )}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;