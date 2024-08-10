// App.jsx

import "./App.css";
import CssBaseline from '@mui/material/CssBaseline';
import { RecipePage } from "./components/Recipes/RecipePage";
import { HomePage } from "./components/Home/HomePage";
// import { RegistrationPage } from "./components/User/RegistrationPage";
// import { LoginPage } from "./components/User/LoginPage";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
import { SearchPage } from "./components/Search/SearchPage";
import RegistrationForm from "./components/User/RegistrationForm";
import LoginForm from "./components/User/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
