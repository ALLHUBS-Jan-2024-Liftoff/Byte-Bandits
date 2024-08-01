// components/NavBar/NavBar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CssBaseline from '@mui/material/CssBaseline'

export const NavBar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/todo">
        Recipes
      </Link>
      <Link className="nav-link" to="/search">
        Search
      </Link>

      {!user ? (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      ) : (
        <>
          <span className="nav-link">Welcome, {user.firstName}</span>
          <button className="nav-link btn btn-link" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
};
