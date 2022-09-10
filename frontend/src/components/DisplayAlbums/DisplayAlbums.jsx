import "./DisplayAlbums.css";
import React from "react";
import { Link } from "react-router-dom";
// import { MDBRipple } from "mdb-react-ui-kit";

const DisplayAlbums = (props) => {
  return (
    <div className="albums">
      {props.albums
        .filter((album) => {
          return album.alt
            .toLowerCase()
            .includes(props.userInput.toLowerCase());
        })
        .map((album) => {
          return (
            <Link to={album.link} key={album.id}>
              <img
                src={album.image}
                alt={album.alt}
                className="image-display"
                height="450px"
              />
            </Link>
          );
        })}
    </div>
  );
};

export default DisplayAlbums;
