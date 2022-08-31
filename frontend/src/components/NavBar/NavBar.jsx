import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const Navbar = () => {
  const { REACT_APP_REST } = process.env;

  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [file, setFile] = useState([]);

  const handleFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    const formData = new FormData();
    formData.append("fileupload", event.target.files[0]);

    fetch(REACT_APP_REST + "/public", {
      method: "POST",

      body: formData,
      dataType: "jsonp",
    });
  };

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <b>PROFILE</b>
          </Link>
          <div className="Avatar">
            <input
              type="file"
              onChange={handleFile}
              id="upload"
              accept="image/*"
              style={{ display: "none" }}
            />
            <label htmlFor="upload">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Avatar
                  id="avatar"
                  src={file}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              </IconButton>
            </label>
            <label htmlFor="avatar" />
          </div>
        </li>
        <div className="buttons-space">
          <Link to={`/home`} className="buttons-2">
            <button>Albums</button>
          </Link>
          <Link to={`/theme`} className="buttons-2">
            <button>Theme</button>
          </Link>
          <li className="buttons-2">
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
