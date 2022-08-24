import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="container">
      <h1>hi</h1>
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
