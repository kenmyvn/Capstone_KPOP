import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="buttonholder">
        <div className="profilebutton">
          <Link to={`/owned`}>
            <button>Owned</button>
          </Link>
        </div>
        <div className="profilebutton">
          <Link to={`/wish`}>
            <button>Wish List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
