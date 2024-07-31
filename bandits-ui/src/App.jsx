// App.jsx

import "./App.css";
import CssBaseline from '@mui/material/CssBaseline';
import { RecipePage } from "./components/Todo/RecipePage";
import { HomePage } from "./components/Home/HomePage";
import { RegistrationPage } from "./components/User/RegistrationPage";
import { LoginPage } from "./components/User/LoginPage";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<RecipePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
