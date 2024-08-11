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
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <nav>
        {!authenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/recipes">Recipes</Link>
            <Link to="/recipes/new">Create Recipe</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
      </nav>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/login"
              element={<LoginPage setAuthenticated={setAuthenticated} />}
            />
            <Route path="/register" element={<RegistrationPage />} />

            {/* Private Routes */}
            {authenticated ? (
              <>
                <Route path="/recipes" element={<RecipePage />} />
                <Route path="/recipes/new" element={<RecipePage />} />
                <Route
                  path="/logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
                />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;