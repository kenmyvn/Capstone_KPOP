import "./DisplayPhotocard.css";
import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const DisplayPhotocard = (props) => {
  const [isHovered, setHover] = useState(false);

  function handleWantClick(event) {
    event.preventDefault();
    if ((props.status = "")) {
      props.createWant(props.image.id);
    }
    // else if (props.status = "want") {
    //   props.deleteWant(props.image.id);
    // }
    // else {
    //   props.deleteHave(props.image.id);
    //   props.createWant(props.image.id);
    // }
  }

  function handleHaveClick(event) {
    event.preventDefault();
    if ((props.status = "")) {
      props.createHave(props.image.id);
    }
    // else if (props.status = "have") {
    //   props.deleteHave(props.image.id);
    // }
    // else {
    //   props.deleteWant(props.image.id);
    //   props.createHave(props.image.id);
    // }
  }

  return (
    <div
      className={`photocardcontainer ${
        props.status == "want"
          ? "pc-want"
          : props.status == "have"
          ? "pc-have"
          : ""
      }`}
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
          <Button
            onClick={handleWantClick}
            className="pcbutton want-button"
            startIcon={<FavoriteIcon />}
          ></Button>
          <Button
            onClick={handleHaveClick}
            className="pcbutton have-button"
            startIcon={<StarIcon />}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default DisplayPhotocard;
