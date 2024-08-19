import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Logout from "./components/User/Logout";
import { RecipePage } from "./components/Recipes/RecipePage";
import { SearchPage } from "./components/Search/SearchPage";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./App.css";
import { CalendarPage } from "./components/Calendar/CalendarPage.jsx";
import { AnalysisPage } from "./components/Analysis/AnalysisPage.jsx";
import { MuiRegPage } from "./components/User/MuiRegPage.jsx";
import { MuiLoginPage } from "./components/User/MuiLoginPage.jsx";
import AccountPage from "./components/User/AccountPage.jsx";

// console.log(authenticated);
function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (

    <Router>
      <>
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
                  <Nav.Link as={Link} to="/recipes">Saved Recipes</Nav.Link>
                  <Nav.Link as={Link} to="/search">Find Recipes</Nav.Link>
                  <Nav.Link as={Link} to="/MealPlans">Meal Plans</Nav.Link>
                  <Nav.Link as={Link} to="/analysis">Analysis</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Help
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/logout">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
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
              element={<MuiLoginPage setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/register"
              element={<MuiRegPage />}
            />

            {/* Private Routes */}
            {authenticated ? (
              <>
                <Route
                  path="/home"
                  element={<HomePage />}
                />
                <Route
                  path="/recipes"
                  element={<RecipePage />}
                />
                <Route
                  path="/search"
                  element={<SearchPage />}
                />
                <Route
                  path="/MealPlans"
                  element={<CalendarPage />}
                />
                <Route
                  path="/analysis"
                  element={<AnalysisPage />}
                />
                <Route
                  path="/logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
                />
                <Route
                  path="/account"
                  element={<AccountPage />}
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