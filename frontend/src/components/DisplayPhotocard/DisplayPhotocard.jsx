import "./DisplayPhotocard.css";
import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const DisplayPhotocard = (props) => {
  const [isHovered, setHover] = React.useState(false);

  return (
    <div
      className="photocardcontainer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        key={props.image.id}
        className="stayc-img"
        src={`http://127.0.0.1:8000${props.image.image}`}
        alt=""
      />
      {isHovered && (
        <div className="bttncontainer">
          <Button className="pcbutton" startIcon={<FavoriteIcon />}></Button>
          <Button className="pcbutton" startIcon={<StarIcon />}></Button>
        </div>
      )}
    </div>
  );
};

export default DisplayPhotocard;
