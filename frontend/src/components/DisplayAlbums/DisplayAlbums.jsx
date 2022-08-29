import "./DisplayAlbums.css";
import React from "react";
import { Link } from "react-router-dom";
// import { MDBRipple } from "mdb-react-ui-kit";

const DisplayAlbums = (props) => {
  return (
    <div className="albums">
      <Link to={`/album/star-to-a-young-culture`}>
        <img
          src="/ab67616d0000b273bc125f40131dd5869b2ec36c.png"
          alt="star to a young culture album"
          className="image-display"
          height="450px"
        />
      </Link>
      <Link to={`/album/staydom`}>
        <img
          src="/ab67616d0000b273af2fda9fb591d43c355c2ac3.png"
          alt="staydom album"
          className="image-display"
          height="450px"
        />
      </Link>
      <Link to={`/album/stereotype`}>
        <img
          src="/ab67616d0000b2735c1dca4c993850471d5d8f14.png"
          alt="stereotype album"
          className="image-display"
          height="450px"
        />
      </Link>
      <Link to={`/album/young-luv`}>
        <img
          src="/ab67616d0000b2738ea860a3e6904b875629d672.png"
          alt="young-luv.com album"
          className="image-display"
          height="450px"
        />
      </Link>
      <Link to={`/album/we-need-love`}>
        <img
          src="/ab67616d0000b273c76a0146e4c1804f22cab995.png"
          alt="we need love album"
          className="image-display"
          height="450px"
        />
      </Link>
    </div>
  );
};

export default DisplayAlbums;
