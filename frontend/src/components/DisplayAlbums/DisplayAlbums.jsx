import "./DisplayAlbums.css";
import React from "react";
import { Link } from "react-router-dom";
// import { MDBRipple } from "mdb-react-ui-kit";

const DisplayAlbums = (props) => {
  return (
    <div className="albums">
      <img
        src="/ab67616d0000b273bc125f40131dd5869b2ec36c.png"
        alt="star to a young culture album"
        className="image-display"
        height="450px"
      />
      <Link to={`/album`}>
        <img
          src="/ab67616d0000b273af2fda9fb591d43c355c2ac3.png"
          alt="star to a young culture album"
          className="image-display"
          height="450px"
        />
      </Link>
    </div>
  );
};

export default DisplayAlbums;
