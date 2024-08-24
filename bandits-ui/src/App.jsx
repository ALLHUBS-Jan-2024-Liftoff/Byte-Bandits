import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import AuthLight from "./components/otherComponents/AuthLight.jsx";
import PrivateRoute from "./services/PrivateRoute"; // Import PrivateRoute component
import ReviewMeal from "./components/Home/ReviewMeal.jsx";
import Button from '@mui/material/Button';
import NutriChart from "./components/Analysis/NutriChart.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated by checking the token in local storage
    const token = localStorage.getItem("token");
    console.log("Token", token);
    if (token) {
      setAuthenticated(true);
    }
    // Set loading to false after authentication check
    setLoading(false);
  }, []);

  if (loading) {
    console.log("Loading", authenticated);
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  const handleLogout = async () => {
    try {
      // Use the logout function from AuthService
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setAuthenticated(false);
  
      console.log("Token: ", localStorage.getItem("token"));
      // Redirect to login page
      // window.location.reload(true);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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
                  <Nav.Link as={Link} to="/review">Review</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/logout">
                      <Button onClick={handleLogout} variant="outline-danger">Logout</Button>
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
            <Route
              path="/home"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/recipes"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <RecipePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <SearchPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/MealPlans"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <CalendarPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/review"
              element={<ReviewMeal />}
            />
            <Route
              path="/analysis"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <NutriChart />
                </PrivateRoute>
              }
            />
            <Route
              path="/logout"
              element={<Navigate to="/login" replace />}

            />
            <Route
              path="/account"
              element={
                <PrivateRoute authenticated={authenticated}>
                  <AccountPage />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={<Navigate to="/login" replace />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;