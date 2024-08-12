// components/NavBar/NavBar.jsx
import { Link } from "react-router-dom";


console.log(authenticated);
export const NavBar = ( authenticated ) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {!authenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/recipes">Recipes</Link>
            <Link to="/recipes/new">Find Recipes</Link>
            <Link to="#MealPlans">Meal Plans</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
    </nav>
  );
};
