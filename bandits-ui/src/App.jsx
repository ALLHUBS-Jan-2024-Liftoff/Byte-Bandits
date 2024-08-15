// App.jsx
import "./App.css";
import React from "react";
import { RecipePage } from "./components/Recipes/RecipePage";
import { HomePage } from "./components/Home/HomePage";
import { SearchPage } from "./components/Search/SearchPage";
import RegistrationPage from "./components/User/RegistrationPage";
import LoginPage from "./components/User/LoginPage";
import { BsNavBar } from "./components/NavBar/BsNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <BsNavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;