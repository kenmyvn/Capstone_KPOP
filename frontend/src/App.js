// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

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
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OwnedPage from "./pages/OwnedPage/OwnedPage";
import WishListPage from "./pages/WishListPage/WishListPage";
import WishListMemberPage from "./pages/WishListMemberPage/WishListMemberPage";
import OwnedMemberPage from "./pages/OwnedMemberPage/OwnedMemberPage";

function App() {
  const [theme, setTheme] = useState("Stereotype");

  return (
    <div className="capstonebody" data-theme={theme}>
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
        <Route path="/album/:albumname" element={<PhotocardPage />} />
        <Route path="/theme" element={<ThemePage setTheme={setTheme} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/owned" element={<OwnedPage />} />
        <Route path="/wish" element={<WishListPage />} />
        <Route path="/wishmember" element={<WishListMemberPage />} />
        <Route path="/ownedmember" element={<OwnedMemberPage />} />
      </Routes>
      <div className="fixed-photo"></div>
      <Footer />
    </div>
  );
}

export default App;
