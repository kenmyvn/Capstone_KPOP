import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ProfilePage.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <h1 className="profileheading">
        {user ? user.username : "not logged in"}'s profile page
      </h1>
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/owned`}>
            <Button variant="contained">Owned</Button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/wish`}>
            <Button variant="contained">Wish List</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
