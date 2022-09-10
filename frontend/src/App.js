// General Imports
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import AuthContext from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import React, { useState, useContext } from "react";
import axios from "axios";

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
  const [user, token] = useAuth();
  const auth = useContext(AuthContext);
  const { member } = useParams();
  const [wantstayc, setWantStayC] = useState([]);
  const [havestayc, setHaveStayC] = useState([]);

  const putWantStayC = async (id) => {
    let wantStayC = {
      user: user.id,
      photocard: id,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/stayc/want/?user=${user.id}&member=${member}`,
        wantStayC,
        config
      );
      setWantStayC([...wantstayc, response.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const putHaveStayC = async (id) => {
    let haveStayC = {
      user: user.id,
      photocard: id,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/stayc/have/?user=${user.id}&member=${member}`,
        haveStayC,
        config
      );
      setHaveStayC([...havestayc, response.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <Route
          path="/album/:albumname"
          element={
            <PhotocardPage
              putWantStayC={putWantStayC}
              putHaveStayC={putHaveStayC}
            />
          }
        />
        <Route path="/theme" element={<ThemePage setTheme={setTheme} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/owned" element={<OwnedPage />} />
        <Route path="/wish" element={<WishListPage />} />
        <Route
          path="/wishmember/:member"
          element={
            <WishListMemberPage
              putWantStayC={putWantStayC}
              putHaveStayC={putHaveStayC}
            />
          }
        />
        <Route
          path="/ownedmember/:member"
          element={
            <OwnedMemberPage
              putWantStayC={putWantStayC}
              putHaveStayC={putHaveStayC}
            />
          }
        />
      </Routes>
      <div className="fixed-photo"></div>
      <Footer />
    </div>
  );
}

export default App;
