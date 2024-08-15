import React, { useState, useEffect } from "react";
import "./App.css";
import AuthProvider, { useAuth } from "./provider/authProvider";
import { BsNavBar } from "./components/NavBar/BsNavBar";
import Routes from "./routes/Routes";

// console.log(authenticated);
function App() {

  return (
    <>
    <AuthProvider>
      <BsNavBar />
      <Routes />
    </AuthProvider>
    </>
  );
}

export default App;