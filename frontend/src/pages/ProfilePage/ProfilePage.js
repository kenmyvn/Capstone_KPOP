import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="container">
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
