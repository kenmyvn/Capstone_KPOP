// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import PhotocardPage from "./pages/PhotocardPage/PhotocardPage";
import ThemePage from "./pages/ThemePage/ThemePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/album" element={<PhotocardPage />} />
        <Route path="/theme" element={<ThemePage />} />
      </Routes>
      <div className="fixed-photo"></div>
      <Footer />
    </div>
  );
}

export default App;
